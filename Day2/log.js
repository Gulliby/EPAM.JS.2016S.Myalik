for(var i = 0; i < 3; i++)
{
    var sum = 0;
    var temp = "getCount" + (i + 1);
    for(var j = 0; j < 5; j++)
    {
        if(temp in data[j])
            sum += data[j][temp]();        
    }
    console.log("count"+ "[" + (i + 1) + "]"+ " = " + sum);   
}