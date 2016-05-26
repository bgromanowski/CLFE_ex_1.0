console.log("Zadanie 13");

var prod = 1;

function z13(a, n){
  for(var i = 1; i <= n; i = i + 1){
    prod = prod * a;
  }
  console.log(prod);
}

var a = 3;
var n = 4;

console.log(a + " do potęgi " + n + " wynosi:");
z13(3,4);
