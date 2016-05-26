console.log("Zadanie9");


var n = 5;
var line = "";

for(var i = 0; i <= n; i = i + 1){
  line = "";
  for(var j = 0; j <= n; j = j + 1){
    if((i+j) % 2 != 0){
      line = line + " * ";
    }else{
      line = line + "   ";
    }
  }
    console.log(line);
}
