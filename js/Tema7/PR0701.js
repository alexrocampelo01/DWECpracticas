let url = "http://swapi.dev/api/planets";
console.log(url);


fetch(url)
    .then( response => response.json())
    .then( json => {
        console.log("los datos que voy a usar son ");
        console.log(json);
        let tabla = document.querySelector('#tabla');
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
    }).catch ( (error) => console.log(error))