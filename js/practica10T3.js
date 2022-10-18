console.log(replaceWhitpostion("hola"));
function replaceWhitpostion(str){
    let strResult = "";
    //solucion de samu
    for(let l of str){
        let base = parseInt(l,36)-9;
        strResult += base+" "; 
    }
    /*
    let foundLeter = false;
    let abecedario = "abcdefghijklmnopqrstuvwxyz";indexof
    for(let i = 0; i<str.length; i++){
        let cont = 0;
        for(let j = 0; i<abecedario.length; i++){
            
            if(str[i] = abecedario[j]){
                strResult += cont+" ";
            }else{
                cont++;
            }
        }
    }
    */
    return strResult;
}
let abecedario = "abcdefghijklmnopqrstuvwxyz";