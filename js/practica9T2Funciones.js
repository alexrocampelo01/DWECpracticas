
console.log(fibonaci(6));
function fibonaci(n){
    let num1 = 0;
    let num2 = 1;
    //let total = 0;
    let fibo = 0;
    
for( let i=1; i<n-1; i++){
    fibo = num1 + num2;
    console.log(fibo);
    console.log("primer elemto ="+ num1+"segundo elemeto "+num2+"fibonachi = "+fibo);
    //total += fibo;
    num1 = num2;
    num2 = fibo;
    console.log(" Despues primer elemto ="+ num1+"segundo elemeto "+num2+"fibonachi = "+fibo);
}
return fibo;
function fiboRecursivo(n){
    if((n==0) || (n==1)){
        return n;
    }else{
        return fiboRecursivo(n-1) + fiboRecursivo(n-2);
    }
}
}