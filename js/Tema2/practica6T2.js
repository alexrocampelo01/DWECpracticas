let n = prompt("dame el numero n");
let K = prompt("dame un valor k");

for (let i=0; i<=K; i++){
    let mult = Number(n) * Number(i);
    console.log(n+" * "+i+" = "+mult);
}