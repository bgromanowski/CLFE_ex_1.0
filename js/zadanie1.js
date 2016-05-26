console.log("Zadanie1")
/*
//
var a = 22;
var b = 9;
var c = 8;

if(a + b > c) {
  console.log("a + b > c - spełnione");
  if(a + c > b) {
    console.log("a + c > b- spelnione");
    if (a + c > a){
      console.log("Liczby a, b i c mogą byc trojkami");
    }else{
      console.log("b + c > a- niespelnione");
    }
  }else{
    console.log("a+b>c - niespelnione");
  }
}else{
  console.log("a + b > c - niespelnione");
}
*/

var a = prompt("enter a:");
var b = prompt("enter b:");
var c = prompt("enter c");

if (a + b > c) {
  console.log("warunek a + b > c spełniony");
  if (c + b > a) {
    console.log("warunek c + b > a spełniony");
    if (a + c > b) {
      console.log("Długości odcinków a, b i c spełniają wszystkie warunki aby utworzyć trójkąt");
    } else {
      console.log("warunek a + c > b spełniony");
    };
  } else {
    console.log("warunek c + b > a niespełniony")
  };
} else {
  console.log("warunek a + b > c niespełniony")
};
