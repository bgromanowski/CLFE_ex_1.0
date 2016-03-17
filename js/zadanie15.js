console.log("Zadanie 15");

function z15(a,b,c){
  if (a >= b) {
    if (a >= c) {
      return a;
    }else {
      return c;
    }
  }else if (a <= b){
		if (b >= c){
			return b;
    }else{
      return c;
		}
	}
}

console.log(z15(4,8,13));
