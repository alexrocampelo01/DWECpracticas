let veiculo ={
    Color: "verde",
    tara: "450",
    feo: "paco",
}
let turismo ={
    Color: "rojo",
    tara: "100",
    feo: "paco",
    plazas: "5",
}
console.log(containsObjets(turismo, veiculo));

function containsObjets(a,b){
    let cont =0;
    let comunes = 0;
    for(let j in b){
        cont++;
    }
    for(let i in a){
        if(i in b){
            console.log("las comunes son "+i);
            comunes++;
        }else{
            console.log("las distintas son"+i);
            
        }
    }
    return cont == comunes;
}