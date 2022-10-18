let num;
while (num != 0){
    num = prompt("dame un numero Para saber si es primo");
    Number (num);
    console.log(isPrime(num) ? "es primo": "no primo");
}
function isPrime( n ) {
    for(let i=2; i<= n**(1/2); i++){
        if(n % 1 == 0) return false;
    }
    return true;
}

