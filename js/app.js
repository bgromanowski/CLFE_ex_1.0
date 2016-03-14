console.log("Hello world1");
console.log("Hello world1");
console.log("Hello world1");
//To jest komentarz
/* To też */
var number1=23;
console.log(number1);

var number2=12.5;
console.log(number2);

var text="Ala ma kota";
console.log(text);

var isITRaining=false;
console.log(isITRaining);

var empty=null;
console.log(empty);

//Modulo
var Number1 = 10;
var Number2 = 15;
var Number3 = Number1 % Number2
console.log(Number3);

var Number4 = 9;
var Number5 = 10;
var Number6 = Number4 % Number5
console.log(Number6);
/* Za pomocą modulo sprawdzamy parzystośc */

console.log(1 == 1);
console.log(3 == 1);
console.log(1 != 5); /*!= czy dwie rzeczy są inne */
console.log( 1 != 1);

console.log(4 > 10);
console.log(4 < 10);
console.log( 10 <= 14);
console.log(4 >= 4);

var Number7 = 10;
var Number8 = 15;
if(Number7 > Number8) {
  console.log("Number7 jest większy");
}else{
  console.log("Number8 jest większy");
}

var Number9 = -10;
if(Number9 > 100){
  console.log("Number9 jest większe od 100"); //gdy ta wartoś jest prawdziwa kod skacze na sam dol w przeciwnym razie kod leci wszystko po kolei
} else if(Number9 > 50) {
  console.log("Number9 jest większe od 50");
} else if (Number9 > 0){
  console.log("Number9 jest większe od 0");
} else{
  console.log("Number9 jest mniejsze od 0")
}


/*PETLE*/
/*WHILE*/
console.log("While");
var i = 0;

while(i <10){
  console.log("Wartośc i =" + i)
  i = i + 1;
}

/*FOR*/
console.log("For:");
for(var j=0; j<10; j=j+1){
  console.log("Watrosc j - " +j);
}

/*for(var i=0; i<10; i=i+1){
  for(var j=0; j<10; j=j+1){
    console.log("Wartosc i = " + i + " wartosc j = " + j);
  }
}*/

/*var line = "";
for(var i=0; i<10; i=i+1){
  line = "Line nr" + i;
  for(var j=0; j<5; j=j+1){
    line = line + " | " + j;
  }
  console.log(line);
}*/

var line = "";
for(var i=0; i<10; i=i+1){
  line = "Line nr" + i;
  for(var j=0; j<i; j=j+1){
    line = line + " | " + j;
  }
  console.log(line);
}

/*FUNKCJE*/
/*function drawRectangle(rectangleSize){
  //var size = 5;
  var line = "";
  for(var i= 0; i < size; i= i+1){
    for(var j= 0; j < size; j= j + 1)
      line= line + "*";
  }
  console.log(line);
}

console.log("Draw rectangle 1");
drawRectangle(4);
console.log("Draw rectangle 2");
drawRectangle(8);
console.log("Draw rectangle 3");
drawRectangle(7);*/


function maxOf3(number1, number2, number3){
    if(number1>number2){
      if(number1>number3){
        // console.log(number1);
        return number1;
      }else{
        // console.log(number3);
        return number3;
      }else{
        if(number2 > number3){
          console.log(number2);
        }else{
          console.log(number3);
        }
      }
    }
}

maxOf3(3,5,7)
