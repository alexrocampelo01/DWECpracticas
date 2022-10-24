let transaccion = {
    titular: "paco",
    numCuenta: "es1231231231313",
    concepto: "las facturas",
}

console.log(transaccion);
console.log( cloneObject(transaccion));
function cloneObject(obj){
    let clon = Object.assign({},obj);
    return clon;
}