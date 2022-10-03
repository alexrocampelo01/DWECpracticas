let fechNac = prompt("induca tu año de nacimineto");
if(fechNac < 2010 || fechNac > 1949){
    console.log("debug"+fechNac);
    if(fechNac <= 1946 ){
        alert("Baby Boomer");
         
    }else if(fechNac <= 1968){
        alert("generacion Milenial");  
    }else if(fechNac <= 1980){
        alert("Generación X");
    }else if(fechNac <= 1993){
        alert("Baby Boomer");
        alert("generacion Z"); 
    }else if(fechNac <= 2010){
        alert("fuera de limites eres muy viejo ")
    }
}
let mes = (1994 <= fechNac && fechNac ) ?
        "Generacion Z" : (1994 <= fechNac && fechNac ) 

        let meg2 =  fechNac < 1946 ? "no disponible" :
                    fechNac < 1968 ? "Baby Boomer" :
                    fechNac < 1980 ? "Generación X" :
                    fechNac < 1993 ? "generacion Milenial" :
                    fechNac < 2010 ? "generacion Z" : 
                    "te as pasado de edad";
        console.log(meg2);

