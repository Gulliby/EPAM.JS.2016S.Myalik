function generate(){
    reset();
    var blockCount = random(50, 100);
    for(var i = 0; i < blockCount; i++)
    {
        var colorBlock = $("<div/>").addClass("block");
        colorBlock.append("<p>" + random(0, 100) + "</p>");
        $(".field-container").append(colorBlock);
    } 
}

function setColor()
{
    var blocks = $(".field-container .block").each(function(i,elem) 
    {
        var infoNumber = $(elem).find("p").text();
        var color = infoNumber > 75 ? "#f75149": (infoNumber > 50 ? "#f7c049" : (infoNumber > 25 ? "#369a82" : "#fff"));
        $(elem).css({
            backgroundColor: color
        });
    });
}

function reset(){
    $(".field-container .block").remove();
}