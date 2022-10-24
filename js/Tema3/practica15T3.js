arr = ["paco","roberto", "luis"];
sendMessage(arr);

function sendMessage(arr){
    arr.forEach(item => {
        cadenaF = `hola ${item}, bien benido al curso de DWEC`;
        console.log(cadenaF);
    });
}