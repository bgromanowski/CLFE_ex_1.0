console.log("zadanie5");
/*
var x = 5;
var y = 10;
var sum1 = 0;
var i = x;
while(i <= y){
  sum1 = sum1 + i;
  i = i + 1;
}

console.log("Wartosc sumy od " + x + " do " + y + " = " + sum1);

var sum2 = 0;
for(var j = x; j <= y; j = j + 1){
  sum2 = sum2 + j;}

console.log("Wartosc sumy od " + x + " do " + y + " = " + sum2);
*/

var x = 5;
var y = 10;

console.log("***Pętla WHILE***");
var sum1 = 0;
var i = x;
while (i <= y) {
  sum1 = i + sum1;
  i++;
};
console.log("Suma liczb z przedziału od " + x + " do " + y + " wyliczona w pętli WHILE wynosi " + sum1);

console.log("***Pętla FOR***");
var sum2 = 0;
for (var j = x; j <= y; j++) {
  sum2 = j + sum2;
};
console.log("Suma liczb z przedziału od " + x + " do " + y + " wyliczona w pętli FOR wynosi " + sum1);
