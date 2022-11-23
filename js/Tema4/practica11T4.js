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
    // y ahora lo creo
    let ul = document.createElement('ul');
    divLista.append(ul);
    //ahora añadimos elementos a la lista con li
    arr.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        console.log(item);
        ul.append(li);
    });
    
}