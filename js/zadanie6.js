console.log("zadanie6")

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
