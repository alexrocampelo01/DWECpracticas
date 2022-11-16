//vamos a generar los indices lo primero

//declaramos el tamaño;
const TAMANO = 8;
let letras =Array('A','B','C','D','E','F','G','H');
//cramos la tabla dentro de la division del tablero
let divBoard = document.querySelector('#board');
let tabla = document.createElement('table');
divBoard.prepend(tabla); //añadimos dentro de la division
//la cracion de los th esta aqui por que nos aran falta durante la cracion del tablero
//indice de las letras crado y insetado
let cordenadasLetra = document.createElement('th');
cordenadasLetra.classList.add('celda');
tabla.append(cordenadasLetra);
for(let i = 0; i<TAMANO; i++){
    let cordenadasLetra = document.createElement('th');
    cordenadasLetra.classList.add('celda');
    cordenadasLetra.textContent = letras[i];
    tabla.append(cordenadasLetra);
}
//cramos las filas tr
for(let i = 0; i<TAMANO; i++){
    let fila = document.createElement('tr');
    tabla.append(fila);
    //cramos las celda 
    let cordenadasNum = document.createElement('th');
    cordenadasNum.classList.add('celda');
    cordenadasNum.textContent = i+1;
    fila.append(cordenadasNum);
    for(let j = 0; j<TAMANO; j++){

        let celda = document.createElement('td');
        celda.classList.add('celda');
        //las coloremos de negro las que toca
        let celdaNum = i+j;
        if(celdaNum%2 != 0){
            celda.classList.add('negra');
        }
        //vamos ha poner identificador ha cada celda
        let id = `${j}${letras[i]}`;
        celda.id = id;
        fila.append(celda); 

         
    }
    
}


