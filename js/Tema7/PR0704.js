let but = document.querySelector('span')
but.addEventListener('click', recogerDatos);

function recogerDatos(){
    // console.log('hola me as pulsado');
    let inputLat = document.querySelector('#lat');
    let lat = inputLat.value;
    let inputLon = document.querySelector('#lon');
    let lon = inputLon.value;
    let inputAPIKey = document.querySelector('#ipk');
    let ipk = inputAPIKey.value;
    console.log(ipk);
    sacarTiempo(lon,lat,ipk);

}
function sacarTiempo(lon, lat,ipk){
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ipk}&lang=sp`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        let tiempo = json.weather[0].description;
        console.log(tiempo);
        let respuesta = document.querySelector('#resTiempo');
        respuesta.innerHTML =`<p>${tiempo}</p>`
}).catch((error) => console.log(error))
}