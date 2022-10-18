let res = prompt("dame un numero que sirba de base a la piramide");
let base = Number(res);
console.log("debug base ="+base);
/*
for(let i=0; i<=base; i++){
    console.log("*");
}
*/
// forma uno mia 
let cadena = "";
for (let i=1; i<=base; i++){
    cadena += "";
    for(let j=1; j<=i; j++){
        cadena += "*";
    }
    console.log(cadena);
}
/*
let cadena = "*";
for (let i=1; i<=base; i++){
    console.log(cadena);
    cadena += "*";
    
}
*/

