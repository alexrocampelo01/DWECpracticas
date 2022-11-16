let lista = document.getElementsByTagName('li');
let contenidoLista = Array.from(lista).forEach((item) => { 
    let texto = item.textContent;
    let link = document.createElement('a');
    let url = "https://"+texto+".com";
    console.log(url);
    link.href = url;
    link.textContent = texto;
    item.textContent ="";
    item.append(link);
    
});
console.log(contenidoLista+"hola");