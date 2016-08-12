for (var i = 0; i < data.length; i++) 
{
    var result = "data[" + i + "]="
    if (data[i] === null)
    {
        result += "не указано";
    }
    else 
    {
        result += (data[i] == undefined) ? "не определено" : data[i];
    }
    console.log(result);
}