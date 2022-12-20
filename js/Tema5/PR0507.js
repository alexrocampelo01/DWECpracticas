let divError = document.querySelector('#error');
divError.innerHTML= "";
let mensajeError = document.createElement('p');

//formulario
let formulario = document.forms.login;
console.log(formulario);
//coreo con su comprobacion
let correo = formulario.elements.correo;
correo.onblur = function(){
        if(correo.value.includes('@') && (correo.value.includes('.') || correo.value.includes(','))){
            console.log("correo correcto");
            divError.innerHTML= "";
        }else{
            console.log("correo incorrecto");
            divError.innerHTML = "<p>el correo es incorrecto</p>";   
        }
}
//contraseña con su comprovacion de longitud
let pass = formulario.elements.pass;
let nivelSeg = document.querySelector('#seguridad');
pass.addEventListener("input", seguridad);
/*
pass.oninput = function() {
    let numChar = pass.value.lenght;
    console.log(numChar);
}
*/
function seguridad(e){
    let texto = e.target.value;
    let numChar = texto.length;//aperte por que si lo incluyes da undefined
    //console.log(numChar);
    //vamos ah sumar uno a las seguriadad por cada 4 caracteres 
    let numSeguridad = 0;
    numSeguridad + Math.floor(numChar/4);
    
    numSeguridad += haveMinus(texto) ? 1: 0;
    numSeguridad += haveMayus(texto) ? 2: 0;
    numSeguridad += haveNum(texto) ? 3: 0;
    numSeguridad += haveSimbols(texto) ? 4: 0;
    
    console.log(numSeguridad);
    if(numSeguridad < 3){
        
    }


    
    
    
}

//pulsar enviar
let envio = formulario.elements.envio;
console.log(pass); 
function haveMinus(text){
    let minus = false;
    for (let char of text){
        let isMinus = (char == char.toLowerCase());
        //console.log(isMayus);
        if(isMinus)minus=true;
    }
    return minus;
}
function haveMayus(text){
    let mayus = false;
    for (let char of text){
        let isMayus = (char == char.toUpperCase());
        //console.log(isMayus);
        if(isMayus)mayus=true;
    }
    return mayus;
}
function haveSimbols(text){
    let signos = false;
    text.trim()
        .split('')
        .forEach(element => {
        let isSignos = '€%&$#@-_.,\'\"\\ \/'.includes(element);
        if(isSignos) signos =true;
    
        });
    return signos;
}
function haveNum(text){
    let num = false;
    text.trim()
        .split('')
        .forEach(element => {
        let isnum = '0123456789'.includes(element);
        if(isnum) num =true;
    });
    return num;
}

    

/*
var strAlphaNum = 'por el contrario esta cadena contiene letras numeros 0123456789 y espacio';
var regex = /[^a-z0-9\x20]/i;
alert(regex.test(strsym));
alert(regex.test(strAlphaNum));
 */


