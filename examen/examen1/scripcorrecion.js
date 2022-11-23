let curentPages = 1;
let characterPerPag = 5;
let numPages = Math.ceil((results.length / characterPerPag));
render();
function render(){
    let characterList = results.filter( (_,index) => {
                                    
                                })
                                .map((character) => crateCharacter(character));
    let divpeolple = document.querySelector('#people-list-characters');
    console.log(characterList);
    divpeolple.replaceChildren(...characterList);

    //añadimos paginado
    let divpag = document.getElementById('pages');

    let prime = document.createElement('span');
    prime.classList.add('first');
    prime.textContent = 'primero';
    prime.addEventListener('click', () => {
        curentPages =1;
    });

    let ante = document.createElement('span');
    ante.classList.add('prev');
    ante.textContent = 'anterior';
    ante.addEventListener('click', () => {
        curentPages = curentPages == 1 ? curentPages : curentPages-1;
    });

    let pags = document.createElement('span');
    pags.textContent = `paguina ${curentPages} de ${numPages}`

    let sige = document.createElement('span');
    sige.classList.add('next');
    sige.textContent = 'siguiente';
    sige.addEventListener('click', () => {
        curentPages = curentPages == numPages ? curentPages : curentPages+1;
    });

    let ulti = document.createElement('span');
    ulti.classList.add('last');
    ulti.textContent = 'ultimo';
    ulti.addEventListener('click', () => {
        curentPages = numPages;
    });
    divpag.replaceChildren(prime, ante, pags,sige, ulti);
}

function crateCharacter(name,birth_year='-',homeworld ){
    let divCharacter = document.createElement('div');
    divCharacter.classList.add('character');
    divCharacter.innerHTML=`
    <div class="character-name">${name}</div>
    <div class="character-birth-year">${birth_year ? birth_year : '-'}</div>
    <div class="character-homeworld">${homeworld?.name ? homeworld.name : '-'}</div>`; // "||" si el primero es false devielve el segundo

    let btn = document.createElement('div');
    btn.classList.add('btn', 'btn-char');
    btn.textContent = 'Detalle';
    btn.setAttribute("data-name",name);
    btn.addEventListener('click', renderDetail);
    divCharacter.append(btn);

    return divCharacter;
}
function renderDetail(e){
console.log(e);
let personage = results.find ((item) => item.name == e.target.dataset.name);
console.log(personage);

function escribirDetalles(obj){
    //la que se encarga del altura
    let divAltura = document.getElementById('height');
    divAltura.textContent = obj.name == null ? "-": obj.name;

    //la que se encarga del peso
    let divPeso = document.getElementById('mass');
    divPeso.textContent = obj.mass == null ? "-":obj.mass;

    //el que se encarga de los años
    let divEdad = document.getElementById('birth-year');
    divEdad.textContent = obj.birth_year == null ? "-": obj.birth_year;
    
    //la que se encarga de palneta
    let divPlaneta = document.getElementById('homeworld');
    divPlaneta.textContent = obj.homeworld.name == null ? "-": obj.homeworld.name; 
    
    // la que se encaga de la poblacion
    let divPopulation = document.getElementById('population');
    divPopulation.textContent = obj.homeworld.population == null ? "-":obj.homeworld.population;
    
    //cracion del color de pelo
    let divPelo = document.getElementById('hair-color');
    divPelo.textContent = obj.hair_color == null ? "-" :traducir(obj.hair_color);
    let divPeloCuadro = document.getElementById('hair-color-filled');
    divPeloCuadro.style.backgroundColor = pintar(obj.hair_color);
    //cracion del color de ojos 
    let divOjos = document.getElementById('eye-color');
    divOjos.textContent = obj.eye_color == null ? "-" :traducir(obj.eye_color);
    let divOjosCuadro = document.getElementById('eye-color-filled');
    divOjosCuadro.style.backgroundColor = pintar(obj.eye_color);
    //pruevas 
    // console.log("color de ojos ="+obj.eye_color);
    // traducir(obj.eye_color);
    console.log(obj.hair_color);
    pintar(obj.hair_color);
}


}