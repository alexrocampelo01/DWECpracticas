let user = "aleajndro rodriguez campelo";

let {nom1, nom2 = "anonimo", nom3} = user;

console.log(nom1);
console.log(nom2);
console.log(nom3);

let user2 = {
    nombre: "paco",
    apellido1: "gonzalez",
};
    let {nombre, apellido1:apel1 = "anonimos",apellido1:apel2 = "anonimos" } = user2;
    console.log(nombre);
    console.log(apel1);
    console.log(apel2);

