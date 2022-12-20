// array ejemplo
// let words = [
//     "ababillarse",
//     "ababillarse",
const letras = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z";
let fallos = 0;
abecedario =  letras.split(",");
console.log(abecedario);
//generamos in alatorio y que sea el que nos escoja una palabla
let palabraIndex = Math.floor(Math.random()*(words.length-1));
console.log(palabraIndex);
let palabla = words[palabraIndex];
palabla = palabla.split('');
console.log(palabla);

//ponemos la foto de los fallos
let divFoto = document.querySelector('#hanged');
divFoto.innerHTML = `<img src="imgs/hangman_0${fallos}.png" />`;

//escribimos los huecos de las letras 
let divEspacios = document.querySelector('#spaces');
palabla.forEach(element => {
    let espacio = document.createElement('span');
    espacio.classList.add('space');
    divEspacios.append(espacio);
});
//escrivimos las letras
let divLetras = document.querySelector('#keyboard');
divEspacios.addEventListener('click',completar);
abecedario.forEach(element => {
    let letra = document.createElement('span');
    letra.classList.add('key');
    letra.textContent= element;
    divLetras.append(letra);
});
function completar(){

}




