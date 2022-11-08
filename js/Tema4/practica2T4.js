let meses = document.querySelector('#months');
let cadena = "";
let listaMeses = Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Agosto","Nobinebre","Diciembre");
//CON INNER
/*
for(let i = 1; i<=12;i++ ){
    cadena +=`<div class="month">
                <div class="month-number">${i}</div>
                <div class="month-name">${listaMeses[(i-1)]}</div> 
                
            </div>`;
}
console.log(cadena);
meses.innerHTML = cadena;
*/

for(let i = 1; i<=12;i++ ){
    let mes = document.createElement('div');
    mes.classList.add("month");

    let mes_num = document.createElement('div');
    mes_num.classList.add("month-number");
    mes_num.textContent = i;
    
    let mes_nom = document.createElement('div');
    mes_nom.classList.add("month-name");
    
    mes_nom.textContent = listaMeses[(i-1)];
    meses.append(mes);
    mes.append(mes_num); mes.append(mes_nom);
}