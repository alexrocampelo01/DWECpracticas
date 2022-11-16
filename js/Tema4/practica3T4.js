// primer div completo
let parrafos = document.getElementsByTagName('p');
let numP = parrafos.length;
let spanParrafo = document.querySelector('#parrafos');
spanParrafo.textContent = numP;
//segundo div
let spanSegundoEnlace = document.querySelector('#segundo-enlace');
let enlaces = document.getElementsByTagName('a');
let enlaceAnteUltimo = enlaces[(enlaces.length -1)];
spanSegundoEnlace.textContent = enlaceAnteUltimo;
//tercer div
let spanGoogle = document.querySelector('#links-google-es');
//reutilizo el array de enlaces anterior 
let contGoogle = 0;

contGoogle = Array.from(enlaces).reduce((acum, item) =>{
    //console.log(item.href);
    if (item.href =="https://www.google.es/"){
        acum++;         
    }
    //console.log(acum);
    return acum;
},0);
spanGoogle.textContent = contGoogle;
//cuarto div
let spanPalabraParrafo = document.querySelector('#palabras-segundo-parrafo');
let stringP2 = parrafos[1].textContent;
let palabras = stringP2.split(' ');
let numPalas = palabras.length;
spanPalabraParrafo.textContent = numPalas;


