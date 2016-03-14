console.log("zadanie8")

var n = 8;
var line = "";
console.log("petle zalezne");
for(var i=0; i<n; i=i+1){
  line = "";
  for(var j=0; j<i; j=j+1){
    line = line + " * ";
  }
  console.log(line);
}

console.log("petle niezalezne");
for(var i=0; i<n; i = i+1){
  line = "";
  for(var j=0; j<n; j = j+1){
    if(j <= i){
      line = line + " * ";
    }
  }
  console.log(line);
}
