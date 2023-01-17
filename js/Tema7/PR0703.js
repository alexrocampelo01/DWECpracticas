let url = "http://swapi.dev/api/planets";
console.log(url);
let tabla = document.querySelector('#tabla');

//cremos los botones 
let divBotones = document.querySelector('#botones');
let butAnt = document.createElement('span');
butAnt.addEventListener('click',cambiar);
butAnt.textContent= "anterior";
let butSig = document.createElement('span');
butSig.addEventListener('click',cambiar);
butSig.textContent= "sigiente";
//voy a crear un parrafo para meter el texto de los numeros
let pagina = 
//metemos los botones al dom
divBotones.append(butAnt);
divBotones.append(butSig);
imprimirTabla(url);
function imprimirTabla(url){
fetch(url)
    .then( response => response.json())
    .then( json => {
        console.log("los datos que voy a usar son ");
        console.log(json);
        tabla.innerHTML = `
            <tr>
                    <th>Nombre</th>
                    <th>Clima</th>
                    <th>Terreno</th>
                    <th>Duracion de un dia</th>
                </tr>
        `;
        
        json.results.forEach(element => {
            tabla.innerHTML += `
                <tr>
                    <td>${element.name}</td>
                    <td>${element.climate}</td>
                    <td>${element.terrain}</td>
                    <td>${element.rotation_period}</td>
                </tr>
            `;
        });
            
           butAnt.dataset.dirUrl = json.previous;
            butSig.dataset.dirUrl = json.next;
    }).catch ( (error) => console.log(error))
}
function cambiar (e){
   let url=  e.target.dataset.dirUrl;
   console.log(url);
   imprimirTabla(url);
}