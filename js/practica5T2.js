//validfacion de que los datos sean numeros 
/*
let valido;
while (valido != 3){
    let res = prompt("introduce un numero haber si adivinas");
    valido = Number(res);
}
alert
*/

let valido;
console.log("que pasa si "+ Number(valido));

console.log( " tipo antes del while: "+typeof valido);
while (valido != "number"){
    valido = prompt("introduce un numero");
    console.log("que pasa si "+ Number(valido));
    console.log("dentro del while tipo de valido = "+typeof valido);
    let cambio = Number(valido);
    console.log("prueva del Number"+cambio);
    if(cambio != 0){
        if(Number.isInteger(Number(valido))){
                alert("el numero es "+valido);
            }else{
                console.log("no es un numero");
            }
    }
    else{
        console.log("no es un numero");
    }
    
}
