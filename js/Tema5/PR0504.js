
//Recojemos el contador 
let divCont = document.querySelector('#contador');
console.log(divCont);
//cramos el contador que es un h1
let cont = 0;
let h1cont = document.createElement('h1');
h1cont.textContent = cont;
divCont.append(h1cont);

//ahora vamos ha recojer el campo 
//campo division dentro de la cual se mueve el cubo
let divCampo = document.querySelector('#campo');
//y recojemos sus medidas
console.log(divCampo);

let divCubo = document.querySelector('#cubo');
divCubo.addEventListener('click',mover);

function mover(e){
    cont++;
    divCont.innerHTML = "";
    let h1cont = document.createElement('h1');
    h1cont.textContent = cont;
    divCont.append(h1cont);
    console.log(e.target);
    
    //* es los valorrs entre los que oscilas y el + es el minimo para que  quede muy pequeño
    let alturaMax = divCampo.clientHeight;
    let anchoMax  = divCampo.clientWidth;
    console.log("medidas de la pantalla es de = "+anchoMax+"la altura es = "+alturaMax);
    //generamos el tamaño
    let anchoC = (Math.floor(Math.random()*300+50));
    let altoC = (Math.floor(Math.random()*300+50));
    divCubo.style.width=anchoC+"px";
    divCubo.style.height=altoC+"px";
    
    divCubo.style.left=(Math.floor(Math.random()*(anchoMax - anchoC)))+"px";
    divCubo.style.top=(Math.floor(Math.random()*(alturaMax - altoC)))+"px";
}
