let but= document.querySelector('button');
let div = document.querySelector('#imagenes');
console.log(div);
let arr = [1,2,3,4,5];

but.addEventListener('click', moverDerecha);
for(let i = 1; i<=arr.length; i++){
    let img  = document.createElement('img');
    img.src = `img/mountain_${i}.jpg`;
    div.append(img);
    //console.log(`img/mountain_${i}.jpg`);
}
function moverDerecha(){
    console.log(arr);
    let ultimo = arr[(arr.length)-1];
    //console.log(ultimo);
    arr.pop();
    arr.unshift(ultimo);
    console.log(arr);
    //hacemos que aprezcan las imagene 
    div.textContent = "\n ";
    for(let i = 0; i<arr.length; i++){
        let img  = document.createElement('img');
        img.src = `img/mountain_${arr[i]}.jpg`;
        div.append(img);
        //console.log(`img/mountain_${i}.jpg`);
    }
    
}
console.log("el arr fuera de la funcion "+ arr);