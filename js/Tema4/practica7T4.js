let but= document.querySelector('button');
let div = document.querySelector('#imagenes');
console.log(div);
let arr = [1,2,3,4,5];
//cramos las imagenes por defecto
for(let i = 1; i<=arr.length; i++){
    let img  = document.createElement('img');
    img.src = `img/mountain_${i}.jpg`;
    div.append(img);
    //console.log(`img/mountain_${i}.jpg`);
}
but.addEventListener('click', ordenarAleatorio);

function ordenarAleatorio(){
    //funciona
    /*
    for(let i = 0; i<arr.length; i++){
        let aleatorio = Math.random() * i;
        arr.sort((a,b) => a+b+--aleatorio );
        console.log("numero aleatorio ="+aleatorio);
        console.log(arr);
    }
    */
    for(let i = 0; i<arr.length; i++){
        arr.sort(() => {
            return Math.random() -0.5;
        } );
        console.log(arr);
    }
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