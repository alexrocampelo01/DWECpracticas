let url = "http://swapi.dev/api/planets";
console.log(url);
let tabla = document.querySelector('#tabla');
tabla.innerHTML = `
            <tr>
                    <th>Nombre</th>
                    <th>Clima</th>
                    <th>Terreno</th>
                    <th>Duracion de un dia</th>
                </tr>
        `;
imprimirTabla(url);
function imprimirTabla(url){
fetch(url)
    .then( response => response.json())
    .then( json => {
        console.log("los datos que voy a usar son ");
        console.log(json);
        
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
        if(json.next){
            imprimirTabla(json.next);
            console.log("hola");
        }else{
            console.log("fin programa");
        }
    }).catch ( (error) => console.log(error))
}
