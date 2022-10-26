let nombres = [
    {
        name: "Alex",
        surname: "rodriguez",
    },
    {
        name: "paco",
        surname: "perez",
    },
];
generateUsername(nombres);
function generateUsername(arr){
    arr.forEach(item => {
        /*
        let nombre = item.name.toLowerCase();
        let apellidos = item.surname.toLowerCase();
        let primeraLatraNom = nombre.charAt(0);
        let nickname = primeraLatraNom + apellidos;
        */
       let ran = (Math.trunc((Math.random()*100)).toString).padStart(2,'0');

       console.log("random = "+alatorio);
        let nickname = item.name.toLowerCase().charAt(0) + item.surname.toLowerCase()+random;
    });
    item[nickname] = nickname;
    //Object.assign(item, {nickname:nickname})
    
}