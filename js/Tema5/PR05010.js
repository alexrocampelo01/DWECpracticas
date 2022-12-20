//creo un avariable generica de expresion regular para no crear una en cada funcion
let regExp;
let formu = document.forms.expresiones;
let fecha = formu.elements.fecha;
//console.log(fecha);
fecha.onblur = function (){
    let valido = fecha.value.match(/\d{1,2}\/\d{1,2}\/\d{1,4}/);
    console.log(valido);
    if(valido){
        console.log("la FECHA cumple la expresion");
    }else{
        console.log("la FECHA no cumple la expresion");

    }
}
let telefono = formu.elements.tlf;
//console.log(telefono);
telefono.onblur = function (){
    let valido = telefono.value.match(/\(?\+[0-9]{2}\)? ?[0-9]{3} ?[0-9]{2} ?[0-9]{2} ?[0-9]{2}/);
    console.log(valido);
    if(valido){
        console.log("la Telefono cumple la expresion");
    }else{
        console.log("la Telefono no cumple la expresion");

    }
}
let email = formu.elements.email;
console.log(email);
email.onblur = function (){
    let exReg = /.+@.+\..+/;
    let valido = exReg.test(exReg);
    console.log(valido);
    if(valido){
        console.log("la Correo cumple la expresion");
    }else{
        console.log("la correo no cumple la expresion");

    }
}
let email = formu.elements.email;
console.log(email);
email.onblur = function (){
    let exReg = /.+@.+\..+/;
    let valido = exReg.test(exReg);
    console.log(valido);
    if(valido){
        console.log("la Correo cumple la expresion");
    }else{
        console.log("la correo no cumple la expresion");

    }
}
let email = formu.elements.email;
console.log(email);
email.onblur = function (){
    let exReg = /.+@.+\..+/;
    let valido = exReg.test(exReg);
    console.log(valido);
    if(valido){
        console.log("la Correo cumple la expresion");
    }else{
        console.log("la correo no cumple la expresion");

    }
}
// let telefono = formu.elements.tlf;
// console.log(telefono);
// telefono.onblur = function (){
//     let valido = telefono.value.match(/\(?\+[0-9]{2}\)? /);
//     console.log(valido);
//     if(valido){
//         console.log("la FECHA cumple la expresion");
//     }else{
//         console.log("la FECHA no cumple la expresion");

//     }
// }

