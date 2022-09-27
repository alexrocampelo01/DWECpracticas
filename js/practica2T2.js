let nombre = prompt("cual es tu nombre","alex");
let notaEx1 = prompt("cual es la nota del primer examen?");
let notaEx2 = prompt("cual es la nota del segundo examen?");
//necsito castear a int los String

let notmedia = ( +notaEx1 + +notaEx2 ) / 2 ;

alert(`hola ${nombre}, la nota media de tus examenes es ${notmedia}`);

