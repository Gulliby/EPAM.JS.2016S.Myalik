var data = []; 
for(var i = 0; i < 5; i++){
    data[i] = {};
    data[i].count = random(1,10);
    var type = random(1,3);
    data[i]["getCount" + type] = function () { return this.count;  }
    console.log("type = " + type + ", count = " + data[i].count); 
}