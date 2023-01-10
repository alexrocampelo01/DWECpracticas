let url = "http://swapi.dev/api/planets";
console.log(url);


fetch(url)
    .then( (response) => {
        console.log(response);
        return response.json();
        }
    ).then( (json) => {
        console.log("los datos que voy a usar son ");
        console.log(json);
        json.result.array.forEach(element => {
            console.log("nombre: ${element.name}");
        });
    }).catch ( (error) => console.log(error))