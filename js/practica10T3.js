console.log(object);
function replaceWhitpostion(str){
    let strResult = "";
    let foundLeter = false;
    let abecedario = "abcdefghijklmnopqrstuvwxyz";
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
    return strResult;
}
let abecedario = "abcdefghijklmnopqrstuvwxyz";