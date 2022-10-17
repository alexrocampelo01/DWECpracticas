function countVowels(str){
    str.toLowerCase();
    let cont= 0;
    for(let i =0; i < str.length;i++ ){
        if(str[i] == "a" ||str[i] == "e" ||str[i] == "i"||str[i] == "o"||str[i] == "u") cont++;
    }
    return cont;
}
let res = prompt("met una cadena que cuneto las vocales");
console.log(countVowels(res));