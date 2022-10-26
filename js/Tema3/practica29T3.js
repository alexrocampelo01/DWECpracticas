let arr = [
    {
        nombre: 'Alex',
        ape1: 'Rodriguez',
        ape2: 'López',
        dni: '71346538',
        expediente: '1720',
        pass: 'alex1234',
        ciclo: 'DAM',
        notas: {
            DWEC: 9.8,
            DIW: 5.4,
            DWES: 10
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
            DWES: 7
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
            DWES: 7
        }
    }
]
console.log(getAverage(arr));
function getAverage(arr){
    let informes = [];
    arr.forEach(element => {
        let informe = [];
        let nombre= element.nombre +" "+ element.ape1+" "+element.ape2;
        let notas = element.notas
        let suma = 0;
        let cont = 0;
        for(let nota in notas){
            suma += notas[nota];
            cont++;
        } 
        let media = suma /cont;
        console.log(suma);
        console.log(cont);
        informe["alumno"] = nombre;
        informe["expediente"] = element.expediente;
        informe["nota_media"] = media;
        informes.push(informe);
    });
    return informes;
    }
    

