console.log("zadanie7");

/*
var n = 8;
var line ="";
for(var i = 0; i < n; i = i+1){
  line="";
  for(var j = 0; j < n; j = j + 1){
    line = line + " * "
  }
  console.log(line);
}
*/

var n = 5;
console.log("***Pętla WHILE***");
var i = 1;
var j = 1;
var line = "";
while (i <= n) {
  while (j <= n) {
    line = line + " * ";
    j++;
  };
  console.log(line);
  i++;
};

console.log("***Pętla FOR***");
var line2 = "";
for (var a = 1; a <= n; a++) {
  line2 = "";
  for (var b = 1; b <= n; b++) {
    line2 = line2 + " * ";
  };
  console.log(line2);
};
