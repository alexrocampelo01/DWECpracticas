
console.log(countLetters("IES San Andres"));
function countLetters(str){
    str = str.toLowerCase()
             .trim()
             .replaceAll(" ", "");
    let letras = {};
    for(let i=0; i<str.length; i++ ){
        if(str[i] in letras ){
            console.log("ya esta l ainclemento");
            letras[str[i]] +=1; 
        }else{
            console.log("no esta la creo");
            letras[str[i]] = 1; 
        }
    }
    return letras;
}
