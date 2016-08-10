for (var i = 0; i < data.length; i++) 
{
    var result = "data[" + i + "]="
    if (data[i] === null)
    {
        result += "не указано";
    }
    else 
    {
        if (data[i] == undefined)
        {
            result += "не определено";
        }
        else
        {
            result += data[i];
        }
    }
    console.log(result);
}