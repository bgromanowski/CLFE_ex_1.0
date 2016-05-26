console.log("zadanie8")
/*
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
*/

var n = 5;

console.log("***Pętle zależne***");
var line1 = "";
for (var i = 1; i <= n; i++) {
  line1 = "";
  for (var j = 1; j <= i; j++) {
    line1 = line1 + " * ";
  };
  console.log(line1);
};

console.log("***Pętle niezależne***");
var line2 = "";
for (var i = 1; i <= n; i ++){
  line2 = "";
  for (var j = 1; j <= n ; j++) {
    if (j <= i) {
      line2 = line2 + " * ";
    };
  };
  console.log(line2);
};
