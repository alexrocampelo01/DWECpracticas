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
while (typeof valido != number){
    let res = prompt("introduce un numero haber si adivinas");
    valido = Number(res);
    Number(valido);
}
alert("el numero es "+valido);