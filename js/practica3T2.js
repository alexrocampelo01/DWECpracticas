/*
Precio por kilo de manzanas
Cantidad de manzanas
Precio por kilo de naranjas
Cantidad de naranjas
Precio por kilo de plátanos
Cantidad de plátanos
*/
let preXKman = prompt("Precio por kilo de manzanas");
let cantMan = prompt("Cantidad de manzanas");
let preXKnar = prompt("Precio por kilo de manzanas");
let cantNar = prompt("Precio por kilo de manzanas");
let preXKpla = prompt("Precio por kilo de platanos");
let cantPla = prompt("Precio por kilo de platanos");

//let totalK = +cantMan + +cantNar + +cantPla;
let totalK = Number(cantMan) + Number(cantNar) + Number(cantPla);

let totalPagado = (Number(cantMan) * Number(preXKman)) + (Number(cantNar) * Number(preXKnar)) + (Number(cantPla) * Number(preXKpla));

alert("Has comprado un total de "+totalK+" kilos de fruta y te ha costado "+totalPagado+" euros");
