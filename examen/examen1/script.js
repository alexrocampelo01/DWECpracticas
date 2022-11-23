//dejo aqui un ejemplo del objeto 
// {
//     name: "Luke Skywalker",
//     height: 172,
//     mass: 77,
//     hair_color: "blond",
//     skin_color: "fair",
//     eye_color: "blue",
//     birth_year: "19BBY",
//     gender: "male",
//     homeworld: {
//       name: "Tatooine",
//       rotation_period: 23,
//       orbital_period: 304,
//       diameter: 10465,
//       climate: "arid",
//       gravity: "1 standard",
//       terrain: "desert",
//       surface_water: 1,
//       population: 200000,
//     },
//   },
//empezamos creando el listado de personajes
let divPeople = document.querySelector('#people-list-characters');
//acintinuacion vamos ha crear cada linea
results.forEach((item) => crearPersonaje(item));

//funcion que genera la lista y el item esta destructurado
function crearPersonaje({name,birth_year, homeworld}){
    //asino los valores ha variables para compar si son nulas 
    //console.log(homeworld);
    //console.log(planeta.name);
    let nombre = name == null ?  "-": name;
    let anos = birth_year == null ? "-": birth_year;
    let planetaNombre = homeworld.name == null ? "-": homeworld.name;
    
    //console.log(nombre+ anos+planetaNombre);
    let divCharacter = crearDivConClass('character');
    divPeople.append(divCharacter);

    //acontinuacion creo todas las div hijas que contendaran los valores
    //la div de nombre
    let divName = crearDivConClass('character-name');
    divName.textContent = nombre;

    //la div de nacimiento
    let divNacimiento = crearDivConClass('character-birth-year');
    divNacimiento.textContent = anos;

    //la div del planeta
    let divPlaneta = crearDivConClass('character-homeworld');
    divPlaneta.textContent = planetaNombre;

    //la div del boton detalles este es mas completo y le inseto las dos clases una con la funcion y otra a mono
    let divDetalles = crearDivConClass('btn');
    divDetalles.classList.add('btn-char');
    divDetalles.textContent = "Detalle";
    //le inseto un id para identificarlo
    divDetalles.setAttribute("data-name", nombre);
    //incluyo el listener al boton
    divDetalles.addEventListener("click",detalles);
    //introduco las divisiones al arbol DOM
    divCharacter.append(divName);
    divCharacter.append(divNacimiento);
    divCharacter.append(divPlaneta);
    divCharacter.append(divDetalles);
}

//funcion que se encargara de hacer la funcion de detalle
function detalles(event){
    let Nompersonaje = event.target.dataset.name;
    console.log(Nompersonaje);
    let detalle = results.find((item) => item.name == Nompersonaje);
    console.log(detalle);
    escribirDetalles(detalle);
}
//creo la funcion para modificar detalles
function escribirDetalles(obj){
    //la que se encarga del altura
    let divAltura = document.getElementById('height');
    divAltura.textContent = obj.name == null ? "-": obj.name;

    //la que se encarga del peso
    let divPeso = document.getElementById('mass');
    divPeso.textContent = obj.mass == null ? "-":obj.mass;

    //el que se encarga de los años
    let divEdad = document.getElementById('birth-year');
    divEdad.textContent = obj.birth_year  ? "-": obj.birth_year;
    
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
function traducir(color){
    //console.log(color);
    let traduccion = translate_colors[color];
    //console.log(traduccion.name);
    return traduccion.name;
}
function pintar(color){
    let codigo = translate_colors[color];
    console.log(codigo.code);
    return codigo.code;
}
//esta funcion servira para hacer las divisones con la clase que se le pasa como parametro
function crearDivConClass(clase){
 let div = document.createElement('div');
 div.classList.add(clase);
 return div;
}

