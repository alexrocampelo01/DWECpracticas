let res = "";
let cont =0;
while(isNumber(res)){
    cont++;
    console.log("debug vueltas "+cont);
    let res = prompt("introduce un string valida");
    console.log(isNumber(res));
}
function isNumber(str){
    if(str == ""){
        return false;
    }else{
        return Number(str) == isNumber;
    }
    
}