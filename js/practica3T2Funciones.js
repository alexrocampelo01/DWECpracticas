let num = prompt("dame un numero y le hayo el factorial");
Number (num);
alert("el fatorial de "+ num +" es igual a "+ fack(num));
function fack (n){ 
    let result = n;
    while (n > 1){
        result *= n-1;

        n--;
          
        console.log("debug = "+result);
        
    }
    return result;
}