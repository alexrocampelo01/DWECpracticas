let lista = document.querySelector('ul');
lista.addEventListener('click', seleccionar);
function seleccionar(e){
    console.log(e.target);
    let elemento = e.target;
    //elemento.classList.add('verde');
    //console.log(elemento.classList.value);
    if(elemento.classList.contains('verde')){
        elemento.classList.remove('verde');
    }else{
        if(!e.ctrlKey){
            desSelec();
        }
        elemento.classList.add('verde');
    }
    console.log(e.ctrlKey);
}
function desSelec(){
    let elementos = document.getElementsByClassName('verde');
    console.log("algo");
    console.log(elementos);
    if(Array.from(elementos).length >0){
        elementos[0].classList.remove('verde')
    }else{
        console.log("algo");
    }
}