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
    for(let i=1; i<primo; i++){
        if(primo % i != 0){
            return booleanPrimo = true;
        }else{
            return booleanPrimo = false;
        }
    }
    /*
    if (primo % primo == 0 && primo % 1 == primo){
        booleanPrimo = true;
        return mensage = "es primo";
    }else{
        booleanPrimo = false;
        return mensage = "no primo";
    }
    */
    console.log(booleanPrimo);
     
    
}

