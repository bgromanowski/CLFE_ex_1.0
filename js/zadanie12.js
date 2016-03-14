console.log("zadanie12");

function fooBar(length){
  var line= "";
  for(var i= 1; i <= length; i= i+1){
    if((i % 15) === 0){
      line= line + "FOOBAR";
    }else if((i % 3) === 0){
      line= line + "foo ";
    }else if((i % 5) === 0){
      line= line + "bar ";
    }else{
     line= line + i + " ";
    }
  }
  console.log(line);
}

console.log("FooBar dla 5:")
fooBar(5)

console.log("FooBar dla 15:");
fooBar(15);
