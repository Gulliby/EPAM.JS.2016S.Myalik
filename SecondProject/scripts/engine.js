var mInterval = 100;
var fieldLines = null;
var zombies = [];
var start = setTimeout(moveZombies, mInterval);
var block_length = null;

window.onload = function() 
{
    $("#btnGenerate").click(generateZombie);
    init();
}

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