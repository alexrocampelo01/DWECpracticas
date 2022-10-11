let identidad ={
    nombre: "paco",
    apellidos:undefined, 
    edad: "14"
}
console.log(remubeUndefined(identidad));
function remubeUndefined(a){
    let newObj ={};
    for(let i in a){
        console.log("propiedad valor antes //"+a[i]);
        if(a[i] != undefined){
            console.log("guardado //"+a[i]);
            newObj[i] = a[i];
        }else{
            console.log("eliminado //"+a[i]);
        }
    }
    return newObj;
}