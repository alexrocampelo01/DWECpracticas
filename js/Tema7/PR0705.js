let but = document.querySelector('span')
but.addEventListener('click', recogerDatos);

function recogerDatos(){
    // console.log('hola me as pulsado');
    let inputPais = document.querySelector('#pais');
    let pais = inputPais.value;
    let inputComu = document.querySelector('#cumunidadA');
    let comu = inputComu.value;
    let inputCity = document.querySelector('#ciudad');
    let city = inputCity.value;
    let inputAPIKey = document.querySelector('#ipk');
    let apik = inputAPIKey.value;
    console.log(apik);
    obtenerCoordenadas(pais,comu,city,apik);

}
function obtenerCoordenadas(pais, comunidadA, ciudad, APIKey){
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${comunidadA},${pais}&limit=5&appid=${APIKey}`
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        let lat = json[0].lat;
        let lon = json[0].lon;
        sacarTiempo(lon,lat,APIKey);
    }).catch(error => console.log(error));

}
function sacarTiempo(lon, lat, apik){
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apik}&lang=sp`;
    // let url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apik}`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        let descrip = json.weather[0].description;
        let icon = `http://openweathermap.org/img/wn/${json.weather[0].icon}.png`;
        let temp = Math.round((json.main.temp) -273);
        let humedad = json.main.humidity;
        let lluvia = json.rain?.h1 || "no hay datos sobre lluvia";

        let res = document.querySelector('#resTiempo');
        res.innerHTML = `
        <fieldset>
            <img src="${icon}">
            <p>descripcion: ${descrip} </p>
            <p>temperatura: ${temp}</p>
            <p>Humedad: ${humedad}</p>
            <p>lluvia: ${lluvia}</p>
        </fieldset>
        `
       
}).catch((error) => console.log(error))
}