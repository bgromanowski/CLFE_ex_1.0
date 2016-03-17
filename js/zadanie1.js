console.log("Zadanie1")

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
