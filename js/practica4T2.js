let radio = prompt("dame el radio de un circulo");
let perimetro = 2 * 3.14 * Number(radio);
let area = perimetro * (Number(radio) * Number(radio));
let area2 = perimetro * (Number(radio) ** 2 );

alert("El perímetro del círculo de radio "+radio+" es: "+perimetro+" y su área es "+area+".");