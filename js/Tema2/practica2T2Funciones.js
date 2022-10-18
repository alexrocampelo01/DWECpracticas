let num = prompt(" escribe un numero");
let cont = 0; 
while (cont != num){
    cont++;
    num++;
    isPrime(cont) ? console.log(num) : "no primo";
    
}
function isPrime( n ) {
    for(let i=2; i<= n**(1/2); i++){
        if(n % 1 == 0) return false;
    }
    return true;
}
