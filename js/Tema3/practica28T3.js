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
console.log(getUserName(arr));
function getUserName(arr){
    let userNames = [];
    arr.forEach(element => {
       let nom = element.nombre.toLowerCase();
       let ape1Letra = element.ape1.charAt(0).toLowerCase();
       let ape2Letra = element.ape2.charAt(0).toLowerCase();
       let userName = nom +ape1Letra +ape2Letra;
       userNames.push(userName);
       });
       return userNames;
    }
    
    

