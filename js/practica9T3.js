let cadena = prompt("pon un frase");
console.log(removeVawels(cadena));
alert(removeVawels(cadena));

function removeVawels(str){
    for(let i  = 0; i< str.length; i++ ){
        if(str[i] == "a" ||str[i] == "e" ||str[i] == "i" ||str[i] == "o" ||str[i] == "u" ||str[i] == "A" ||str[i] == "E" ||str[i] == "I" ||str[i] == "O" ||str[i] == "U"){
            str = str.replaceAll(str[i], "");
        }
    }
    return str;
}