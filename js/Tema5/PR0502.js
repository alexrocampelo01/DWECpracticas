//cramos los elemetos div de la tabla y la tabla
let divTabla = document.querySelector('#tabla');


let tamaño = 10;
let acum = 1;
//hacemos la tabla
let tabla = document.createElement('table');
tabla.addEventListener('click', cambiarColor);
tabla.addEventListener('contextmenu', cambiarColor)
divTabla.append(tabla);
for(let i =1; i<=tamaño;i++){
    let columna = document.createElement('tr');
    tabla.append(columna);
    for(let j =1; j<=tamaño;j++){
        let fila = document.createElement('td');
        fila.textContent = acum++;
        fila.setAttribute("data-num", acum);
        columna.append(fila);
        //console.log(i+j);
        
    }
}
function cambiarColor(e){
    switch (e.type){
        case "click":
            //console.log(e.target);
            if(e.target.classList.contains('select')){
                e.target.classList.remove('select');
            }  
            else{
                e.target.classList.add('select');
            }    
        break;
        case "contextmenu":
            //console.log(e.target);
            e.target.classList.add('derecho');
        break;
    }     
}