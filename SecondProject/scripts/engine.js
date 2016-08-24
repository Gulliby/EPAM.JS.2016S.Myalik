window.onload = function() 
{
    var mInterval = 100;
    var fieldLines = null;
    var zombies = [];
    var start = setTimeout(moveZombies, mInterval);
    var block_length = null;
    var growId = null;
    
    $("#btnGenerate").bind("click", generateZombie);
    $("#btnSlow").bind("click", slowZombies);
    $("#btnGrow").bind("click", grow)
    $("#btnExplode").bind("click", explode)
    init();

    function moveZombies() 
    {
        if (zombieCome()) stopGame();

        for(var i = 0; i <zombies.length; i++)
        {
            zombies[i].move(mInterval);
        }

        start = setTimeout(moveZombies, mInterval);
    }

    function zombieCome()
    {
        for(var i = 0; i < zombies.length; i++)
        {
            if(zombies[i].position >= block_length - zombies[i].speed)
            {
                return true;
            }
        }
    }

    function slowZombies()
    {
        for(var i = 0; i < zombies.length; i++)
        {
            zombies[i].slow();
        } 
        
        $("#btnSlow").unbind("click", slowZombies);
        setTimeout(setRegular, 100 * mInterval);
    }

    function grow()
    {
        growOld();
        setTimeout(clear, 100 * mInterval);
    }

    function growOld()
    {
        var i = 0;
        while(i < zombies.length)
        {
            if(!zombies[i].damage(10))
            {
                zombies[i].die();
                zombies.splice(i, 1);
            }
            else
            {
                i++;
            }
        } 
        growId = setTimeout(growOld, 10 * mInterval); 
    }

    function clear()
    {
        if(growId != undefined)
        {
            clearTimeout(growId);
        }
    }

    function explode()
    {
        var i = 0;
        while(i < zombies.length)
        {
            if(!zombies[i].damage(15))
            {
                zombies[i].die();
                zombies.splice(i, 1);
            }
            else
            {
                i++;
            }
        }    
    }


    function setRegular()
    {
        for(var i = 0; i < zombies.length; i++)
        {
            zombies[i].regulare();
        } 

        $("#btnSlow").bind("click", slowZombies);
    }

    function stopGame()
    {
        for(var i = 0; i < zombies.length; i++)
        {
            zombies[i].die();
        }
        zombies = [];
        alert("Game Over!")
    }

    function generateZombie()
    {  
        var zombie = random(1,2) == 1 ? new Michael(0) : new Strong(0);
        zombie.create(fieldLines[random(0, 5)]);
        zombies.push(zombie);
    }

    function random(min, max) 
    {
        return Math.floor((Math.random() * max) + min);
    }

    function init()
    {
        fieldLines = $(".field-line").toArray();
        block_length = $("#field").width();
    }
}

