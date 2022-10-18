let a = Number(prompt ("indica el lado a del triangulo "));
let b = Number(prompt ("indica el lado b del triangulo "));
let c = Number(prompt ("indica el lado c del triangulo "));
isValidTriangle(a,b,c) ? console.log("si se puede hacer")  : console.log("nose puede");
console.log();
function isValidTriangle(a, b, c){
    return (a+b > c) && (a+c > b) && (c+b >a);
}
    