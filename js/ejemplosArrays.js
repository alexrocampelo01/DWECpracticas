/* -------------------------SPLIT
let arr = ["uno","dos", "tres","cuatro", "cinco"];

let spl1 = arr.splice(1);//borra todos elemetos aprtir de l apsocion del parametro
let dev2 = arr.splice(1, 2);//borra los elemtos entre las posciones indicadas
let dev = arr.splice(3 , 2, 'cero', 'diez', ['0', "1", "2"]);//inserta apartir de tercer pàrametros
let dev3 = arr.splice(3 , 2, 'cero');// borra lo de las posiciones y agreega o sustitulle los ultimos
let dev4 = arr.splice(3 , 0, 'cero');// no borra y inserta el tercer para metro 


//---------------------------SLICE
let sli2 = arr.slice(1)// me lo devuelve emepzando por el numero indicado asta el final
let sli1 = arr.slice(1,2);// se le pasan dos indice de inicio y final y de vuelve un array('subarray') sin modificar el original

let contcat //concatena
arr = ["uno","dos", "tres","cuatro", "cinco"];
*/
/*--------------------------FORECHE

arr.forEach(function(item, index,arr){ //arr omitible por que nose usa 
    console.log("soy el elemento ="+item+"en la posicion ="+index);
});
*/
/*
arr.forEach((item, index) =>{
    console.log("soy el elemento ="+item+"en la posicion ="+index);
});
*/
//--------------------------SOME
/*
let arr =[1,7,3,11,5];
let tienePar = arr.some(item => item%2==0);//itera una funcion(condicion) sobre todos los elemtos del arrya si uno da verdadero me debuelve verdadero
console.log("hay un nuemro par //"+tienePar);
*/
//EVERY
/*
let arr =[1,7,3,11,5];
let todosInpar = arr.every(item => item%2!=0);//itera una funcion(condicion) sobre todos los elemtos del arrya si todos son verdaderos debuelve true 
console.log("hay un nuemro par //"+tienePar); //SE ESPARA TRUE por que todos son distintos de par
*/
//-----------------------FIND
/*

let primePar = arr.find(); // de buelve el primer elemto que cumpla la condicion
let primeParIndex = arr.findIndex();// me debuelbe el index de la primera poscion que cumpla la condicion
*/
//-----------------------FILTER
let arr =[1,2,3,4,5];
let a = arr.filter(item => item%2==0);// debuelbe un array con todos los elemtos que cumplan la condicion 
let arr1 = [
    { nombre: "Paco", curso: 2, ciclo:"SMR" },
    { nombre: "Rodolfo", curso: 1, ciclo:"DAW" },
    { nombre: "Segismundo", curso: 1, ciclo:"SMR" },
    { nombre: "Rigoverto", curso: 1, ciclo:"DAW" },
    { nombre: "Eugenio", curso: 2, ciclo:"ASMR" },
];
let b = arr1.filter(item => item.ciclo == "ASMR" && item.curso == 2); //
console.log(b);


