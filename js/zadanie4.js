console.log("zadanie4");
/*
var x = 9;

var silnia1 = 1;
var i = 1;
while(i <= x){
  silnia1 = silnia1 * i;
  i = i + 1;
}

console.log("Silnia z " + x + " wyliczona w petli while = " + silnia1);

var silnia2 = 1;

for(var j=1; j<=x; j=j+1){
  silnia2 = silnia2 * j;
}

console.log("Silnia z " + x + " wyliczona w pętli for = " + silnia2);
*/

var x = 5;

console.log("#####Silnia WHILE#####");
var i = 1;
var silnia1 = 1;
while (i <= x) {
  silnia1 = i * silnia1;
  i++;
};
console.log("Silnia z liczby " + x + " wyliczona w pętli WHILE wynosi " + silnia1);

console.log("#####Silnia FOR#####");
var silnia2 = 1;
for (var j = 1; j <= x; j++) {
  silnia2 = j * silnia2;
};
console.log("Silnia z liczby " + x + " wyliczona w pętli FOR wynosi " + silnia2);
