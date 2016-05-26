console.log("zadanie6")
/*
var  n = 20;
for(var i = 0; i <= n; i = i + 1){
  console.log("Wartosc i = " + i);
  if(i % 2 === 0){
    console.log("- parzysta");
  }else{
    console.log("- nieparzysta");
  }
}

var m = 20;
var j = 0;
var number = 0;
while(j <= m){
  number = number + 1;
  console.log(number);
  if(number % 2 === 0){
    console.log("- parzysta");
  }else{
    console.log("- nieparzysta");
  }
  j = j + 1;
  }
*/

var n = 20;

console.log("***Pętla WHILE***");
var i = 0;
while (i <= n) {
  if (i === 0){
    console.log(i " ")
  } else if (i % 2 === 0) {
    console.log(i + " - parzysta");
  } else {
    console.log(i + " - nieparzysta")
  };
  i++;
};

console.log("***Pętla FOR***");
for (var j = 0; j <= n; j++){
  if (j % 2 === 0) {
    console.log(j + " - parzysta");
  } else {
    console.log(j + " - nieparzysta");
  };
};
