let lista = document.querySelector('ul');
lista.addEventListener('click', seleccionar);
function seleccionar(e){
    console.log(e.target);
    let elemento = e.target;
    console.log("control de control = "+e.ctrlKey);
    //elemento.classList.add('seleccionado');
    //console.log(elemento.classList.value);
    //amparado el caso de deselecionar
    if(e.ctrlKey){//si control alterno
        elemento.classList.toggle('seleccionado');
    }else{//si no esta control m
        if(elemento.classList.contains('seleccionado')){//si esta seleccionado lo quito
            elemento.classList.remove('seleccionado');
        }
        else if(!elemento.classList.contains('seleccionado')){//si no tiene quito todas las otras y marco la mia
            desSelec();
            elemento.classList.add('seleccionado');
        }
    }
    /*
    if(elemento.classList.contains('seleccionado')){
        desSelec();
        elemento.classList.remove('seleccionado');
    }else{
        if(!e.ctrlKey){
            elemento.classList.toggle('seleccionado');
        }else{
            desSelec();
            elemento.classList.add('seleccionado'); 
            
        }
    }
    */
}
function desSelec(){
    let elementos = document.querySelectorAll('.seleccionado');
    console.log(elementos);
    elementos.forEach((item)=>{
        item.classList.remove('seleccionado');
    });
}