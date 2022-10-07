let num1 = Number(prompt("indique el numero 1"));
let num2 = Number(prompt("indique el numero 2"));
console.log(sumOfmults(num1, num2));

function sumOfmults(a , b){
    let total = 0;
    for(let i=1; i<=b ; i++){
        //console.log(i);
        let mult = a*i;
        total += mult;
        //console.log(mult); 
    }
    return total;
}