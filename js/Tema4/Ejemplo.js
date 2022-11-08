let nodos = document.getElementsByTagName('li');
let h1 = document.getElementsByTagName('h1')[0];
h1.textContent = "probando las cosas de lops h1";
/*
for (let i = 0; i<nodos.length; i++){
    nodos[i].textContent = "hola "+(i+1);
}
*/
/*
Array.from(nodos).forEach((item) =>{ item.textContent = "hola"});

let lst = document.getElementById('lista');
lst.ennerHTml = `
<li>daw</li>
<li>daw</li>
`;*/
/* creacion y alteracion de elemetos del html
let elemento = document.createElement('div');
let div  = document.getElementById('paco');
elemento.innerHTML = 'hola mundo';
elemento.append(div); //lo inserta al final del documento
elemento.prepend(div); //al principio pero nodos hijos 
elemento.
elemento.remove()//elimina
elemento.cloneNode();//clona el nodo del que es propiedad y para metro "deep" que ara que se clone tambien los nodos hijos del nodo 
console.log(elemento);
*/
/*modificar estilos con js*/
let content = document.getElementById('paco');
content.className(); //sustitulle el nombre de un elemto
content.classList.add();//añade clases al elemto
content.classList.remove(); //elimina las clases de un elemento
content.classList.toggle(); //invierte una clase si esta la quita y si no esta la añade
content.classList.contains(); //booleano si contiene una clase el elemto

/* modificando css*/
//let item = document.getElementById();

/* eventos*/
let item = document.querySelectorAll('.item');
item.forEach((item) => { 
    item.addEventListener('click', cambioColor())})
    function cambioColor(evento){
        console.log(evento.target);
        i.classList.toggle('active');
    }
