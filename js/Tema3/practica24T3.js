let arr = [
    {
        nombre: 'Alex',
        ape1: 'Rodriguez',
        ape2: 'López',
        dni: '71346538',
        expediente: '1720',
        pass: 'alex1234',
        ciclo: 'DAW',
        notas: {
            DWEC: 9.8,
            DIW: 5.4,
            DWES: 4
        }
    },
    {
        nombre: 'Pepe',
        ape1: 'Pérez',
        ape2: 'López',
        dni: '10100100',
        expediente: '1720',
        pass: '1234ABC',
        ciclo: 'DAW',
        notas: {
            DWEC: 7.8,
            DIW: 5.4,
            DWES: 4
        }
    },
    {
        nombre: 'Juan',
        ape1: 'Mázquez',
        ape2: 'Hernández',
        dni: '7340831',
        expediente: '342',
        pass: 'P@ssw0rd',
        ciclo: 'DAW',
        notas: {
            DWEC: 8,
            DIW: 5.2,
            DWES: 4
        }
    }
]



console.log(addNif(arr));

function addNif(arr){
    arr.forEach(element => {
        //console.log(element);
        let dni = element.dni;
        toString(dni);
        let nif = dni +calculoLetraNif(dni);
        element.nif = nif;
        delete element.dni;
    });
    return arr;
     
}
function calculoLetraNif(dni){
    let letras =Array.from("TRWAGMYPDXBNJZSQVHLCKE");
    let letras1 = "TRWAGMYPDXBNJZSQVHLCKE";charAt()
    let Letras = ["T","R","W","A","G","M","Y","P","D","X","B","N","J","Z",
    "S","Q","V","H","L","C","K","E",];

    let calculo = dni % 23;
    return Letras[calculo];

}