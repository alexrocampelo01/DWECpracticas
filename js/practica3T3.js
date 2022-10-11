let direccion = {
    calle: "avenida roma",
    portal: "3",
    piso: "2D",
}
let identidad = {
    nombre: "jesulin",
    apellidos: "ramired",
    Dni: "65647865N",
    portal: "4",
    piso: "3D",
    
}
console.log(mergeObject(direccion, identidad));

function mergeObject(obj1, obj2){
    let z ={};
    for(let i in obj1){
        if(i in obj2){
            console.log("dentor del if propiedades comunes ="+i);
            z[i]=obj2[i];
            console.log(z[i]);
        }   
        else{
            console.log("ni idea de que estoy haciendo");
        }
    } 
    return z;   
}
