let url = "http://swapi.dev/api/planets";
console.log(url);


fetch(url)
    .then( (response) => {
        //console.log(response);
        return response.json();
        }
    ).then( (json) => {
        console.log("los datos que voy a usar son ");
        console.log(json);
        let lista = document.querySelector('#listaPlanetas');
        json.results.forEach(element => {
            let planetaNom = element.name;
            let elementoLista = document.createElement('li');
            elementoLista.innerHTML = planetaNom;
            lista.append(elementoLista);
            
        });
    }).catch ( (error) => console.log(error))