var mapLength = 9;
var map = new Array(mapLength); 
var factor = Math.sqrt(mapLength);
var types = ["cross","circle"];
var currentTypeNumber = 0;
var mode = 0;

window.onload = function() 
{
    setEqualHeight($(".game-container .cell"));
    $("#mode").click(changeMode);
    for(var i = 1; i <= mapLength; i++)
    {
        $("#cell" + i).click( { id: i }, putEvent);
        $("#start-button").click(reset);
    }
}

function setEqualHeight(columns)
{
    var temp = $(columns).filter(":first").width();
    columns.height(temp);
}

function generateNumber()
{
     var id = random(1, mapLength);
     if(!(put(id)))
        generateNumber();
}

function putEvent(event)
{ 
    put(event.data.id)
}

function put(id)
{
    if(map[id]) 
        return false;
    var type = types[currentTypeNumber];
    map[id] = type;
    currentTypeNumber = (currentTypeNumber + 1) % types.length;
    $("#cell" + id).addClass(type);
    if(checkEnd())
    {
        alert("Конец Игры!");
        return true;
    }
    if((type == "cross") && (mode == 1))
    { 
        generateNumber();
    }
    return true;    
}

function checkEnd()
{
    var rowFlag = false;
    for(var i = 0; i < factor; i++)
    {
        rowFlag = rowFlag || checkRegularity((i * factor) + 1, 1);
    }
    var colFlag = false;
    for(var i = 0; i < factor; i++)
    {
        colFlag = colFlag || checkRegularity(i + 1,factor);
    }
    return checkRegularity(1, factor + 1) || checkRegularity(factor, factor - 1) || rowFlag || colFlag;
        
}

function checkRegularity(count, regularity)
{
    if(map[count] == undefined)
        return false;
    var element = map[count];  
    var i = count + regularity
    for(var j = 0; j < factor - 1 ; j++)
    {
        if((element != map[i]) || (map[i] == undefined))
            return false;
        i += regularity
    }
    return true;
}

function reset()
{
    currentTypeNumber = 0;
    map = new Array(mapLength); 
    var blocks = $(".game-container .cell").each(function(i,elem) 
    {
        var element = $(elem);
        for(var i = 0; i < types.length; i++)
        {
            if(element.hasClass(types[i]))
                element.removeClass(types[i]);
        }
    });
}

function changeMode()
{
    var text = (mode == 0) ? "Игрок vs Игрок" : "Игрок vs ИИ"; 
    $("#mode").text(text); 
    mode = (mode + 1) % 2;
}



