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
    let valido = exReg.test(email.value);
    console.log(valido);
    if(valido){
        console.log("la Correo cumple la expresion");
    }else{
        console.log("la correo no cumple la expresion");

    }
}
let color = formu.elements.color;
//console.log(color);
color.onblur = function (){
    let exReg = /\#[0-9a-f]{6}/i;
    let valido = exReg.test(color.value);
    console.log(valido);
    if(valido){
        console.log("la Color cumple la expresion");
    }else{
        console.log("la Color no cumple la expresion");

    }
}
let ip = formu.elements.ip;
console.log(ip);
ip.onblur = function (){
    let exReg = /^[0-9]{7,8}[A-Z]$/i;
    let valido = exReg.test(ip.value.trim());
    console.log(valido);
    if(valido){
        console.log("la nif cumple la expresion");
    }else{
        console.log("la nif no cumple la expresion");
    }
}
let nif = formu.elements.nif;
console.log(nif);
nif.onblur = function (){
    let exReg = /^[0-9]{7,8}[A-Z]$/i;
    let valido = exReg.test(nif.value.trim());
    console.log(valido);
    if(valido){
        console.log("la nif cumple la expresion");
    }else{
        console.log("la nif no cumple la expresion");
    }
}
let matricula = formu.elements.matricula;
//console.log(matricula);
matricula.onblur = function (){
    let exReg = /[0-9]{4}[A-Z]{3}/;
    let valido = exReg.test(matricula.value);
    console.log(valido);
    if(valido){
        console.log("la matricula cumple la expresion");
    }else{
        console.log("la matricula no cumple la expresion");

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

