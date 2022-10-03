let num;
while (num != 0){
    num = prompt("dame un numero Para saber si es primo");
    Number (num);
    alert(isPrime(num));
}
function isPrime( n ) {
    let primo = n;
    let mensage;
    let booleanPrimo;
    let res;
    if (primo % primo == 0 && primo % 1 == primo){
        booleanPrimo = true;
        return mensage = "es primo";
    }else{
        booleanPrimo = false;
        return mensage = "no primo";
    }
    console.log(booleanPrimo);
     
    
}

