let div = document.getElementById('numbers');
//con inner

/*let cadena = "";
//let div2 = document.querySelector('#numbers');
for(let i=1; i<=30;i++){
    cadena += "<span class='number'>"+i+"</span>";
}
console.log(cadena);
div.innerHTML = cadena;*/
//sin iner 

for(let i=1; i<=30;i++){
    let span = document.createElement('span');
    span.classList.add("number");
    span.textContent =i;
    div.append(span);
}
