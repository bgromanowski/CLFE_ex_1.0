console.log("Zadanie10");

var n = 5;

for(i = 1; i <= n; i = i + 1) {
   line = "";
        for(j = 1; j <= n; j = j + 1) {
            if(j <= i) {
                line = line + "*";
            }else{
                line = line + j;                }
        }console.log(line);
}

for(i = 5; i > 0; i = i - 1) {
   line = "";
        for(j = 1; j <= n; j = j + 1) {
            if(j <= i) {
                line = line + "*";
            }else{
                line = line + j;                }
        }console.log(line);
}
