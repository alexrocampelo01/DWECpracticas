let dif = 0; //variable que contine la dificultad
let tamano = Array(400,200,100,50,25);//arrya que contiene los tamaños en funcion de la difilcultad
let temporizador;
let tiempoActual;
let divTime;
let marcador = document.querySelector('#score');
let tiempoFin = 2;
//recojemos el div contenedor y sus dimesiones
let divGameZone = document.querySelector('#game-zone');
let altoG = divGameZone.clientHeight;
let anchoG = divGameZone.clientWidth;

let empezar = false;

//recojemos el click en star
let butEmpe = document.querySelector('#btn-start');
butEmpe.addEventListener("click", jugar);
//recojemos el click en star
let butReset = document.querySelector('#btn-reset');
butEmpe.addEventListener("click", reset);
// lo prime vamos ha hacer que el recuadro baile dentro del campo
//cramos el cubo 
let divCubo = document.createElement('div');
divCubo.setAttribute("id","cubo");
divCubo.style.backgroundColor = "red";

divGameZone.append(divCubo);
//Funcion encargada de mover el cubo al clicar
function mover(){
        //console.log(e.target);
        //lo cambiamos de tamaño al clicar
        let anchoC =Math.floor(Math.random()*100+tamano[dif]);
        let altoC =Math.floor(Math.random()*100+tamano[dif]);
        divCubo.style.width = anchoC + "px";
        divCubo.style.height = altoC + "px";
        //ahora cambiamos la posicion
        divCubo.style.top = Math.floor(Math.random()*(altoG - altoC)) + "px"; 
        divCubo.style.left =  Math.floor(Math.random()*(anchoG - anchoC)) + "px";

        //ahora modificamos el contador incrementadonlo
        
        let puntos = marcador.textContent;
        puntos++;
        marcador.textContent = puntos;
}
//ahora vamos ha cambiar la dificultad
//recojemos el div de dificultades
let divDif = document.querySelector('#diff');
divDif.addEventListener("click", cambiarDif);
function cambiarDif(e){
    console.log(e.target);
    //cojemos la dificultad y la asignamos a la gloval
    dif = (e.target.textContent) -1; //reto uno porque al ser un idex d eun arrya para que no rompa
    //buscamos la ya selecionada y lo quito
    let divSelect = document.querySelector('.selected');
    divSelect.classList.remove('selected')
    if(!e.target.classList.contains('selected')){
        e.target.classList.add('selected');
    }
    
}


function jugar(){
    //recojemos el valor del input 
        let inputNom = document.querySelector('#player-input');
        console.log(inputNom);
        let nomPlayer = inputNom.value;
        console.log(nomPlayer);
        //si el input esta vacio lo pedimos dejo 
        if(nomPlayer != ""){
            console.log("empezar");
            mover(); //si emos empzado creo el primer cubo
            //ahora vamos con el temporizador
            divTime = document.querySelector('#time');
            tiempoActual = divTime.textContent;
            console.log(tiempoActual);
            divCubo.addEventListener("click",mover);
            //vamos a intentar el cronometro
            temporizador = setInterval(updateCrono,1000);
            
        }

}


function updateCrono(){

    tiempoActual ++;
    divTime.textContent = tiempoActual;
    if(tiempoActual >= tiempoFin){
        clearInterval(temporizador);
        let divRank = document.querySelector('#ranking');
        divCubo.removeEventListener("click",mover);
        let inputNom = document.querySelector('#player-input');
        let nomPlayer = inputNom.value;
        divRank.innerHTML = `
                <div id="ranking-second" class="ranking-item">
                <span class="ranking-name">${nomPlayer}</span>
                <span class="ranking-score">${marcador.textContent}</span>
                </div>`;
            reset();
            empezar = false;
    }
}

function reset(){
    divTime.textContent = "0.0";
    marcador.textContent = "0";
    dif = 0;
}