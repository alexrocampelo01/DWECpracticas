let fechas =['24-05-2020', '02-12-2018', '14-02-2020'] ;
console.log(sortDates2( fechas ));
function sortDates2 (arr){
            return arr.sort((a,b) => a<b ? -1: 1);
}
function sortDates2 (arr){
        let fechaA = a.slice(6) + a.slice(3,5) +a.slice(0,2);
        let fechaB = b.slice(6) + b.slice(3,5) +b.slice(0,2);
        return fechaA < fechaB ? -1:1;
}

function sortDates (arr){
    arr.sort((a,b) =>{
        let fechaA = a.split("-");
        let fechaB = b.split("-");
        return fechaA[2] > fechaB[2] ? 1:
                fechaA[2] < fechaB[2] ? -1:
                 fechaA[1] > fechaB[1] ? 1:
                  fechaA[1] < fechaB[1] ? -1:
                   fechaA[0] > fechaB[0] ? 1:
                    fechaA[0] < fechaB[0] ? -1: 0;        
    });
    
    return arr;
    /*
    arr.forEach(item => {
        let fecha = item.split('-');
        let fechasDesCom=[];
        fechasDesCom.push(fecha);
        console.log(fechasDesCom); 
        fechaDesCom
        
    });*/
    /*
        let dia = fecha[0];
        let mes = fecha[1];
        let año = fecha[2];
        
        console.log("dia/"+dia+"/mes/"+mes+"/año/"+año);
        let fechaAnt  = [];
        */

        
}

