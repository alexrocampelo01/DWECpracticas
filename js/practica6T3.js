let num = prompt("indique el nuemro al cual cambiar la base");
let baseS = prompt("indique la base de su numero (numero)");
let baseF = prompt("indique la base a la cual cobertir (numero)");

console.log("los valores num = "+num+" base inicial = "+baseS+" y base final = "+baseF);
console.log("convertido el numero es ="+convertBase(num, baseS, baseF));

function convertBase(str, baseFrom, baseTo){
    let num = parseInt(str, baseFrom);
    return num.toString(baseTo);
    
}