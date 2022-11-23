let tareas = [];

let input = document.querySelector('#input-text');
let btn = document.querySelector('#add-button');
btn.addEventListener("click", hacerTarea);



function hacerTarea(e){
    let tarea = input.value;
    tareas.push(tarea);
    //console.log("la atrea es = "+tarea);
    //console.log(tareas);
   
    renderLista(tareas);
    
}
function renderLista(arr){
    let divLista = document.querySelector('#todos');
    //limpiamos la lista al comienzo
    divLista.textContent = "";
    // y ahora cramos la lista
    let ul = document.createElement('ul');
    divLista.append(ul);
    //ahora añadimos elementos a la lista con li
    arr.forEach(item => {
        let li = document.createElement('li');
        li.id =arr.length;
        li.textContent = item;
        console.log(item);
        
        //ahora cramos el span que sera el boton
        let but = document.createElement('span');
        but.setAttribute("data-id",arr.length);
        but.classList.add('btn');
        but.textContent = "Borrar";
        console.log(but);
        
        li.append(but);
        ul.append(li);
    });
    
}