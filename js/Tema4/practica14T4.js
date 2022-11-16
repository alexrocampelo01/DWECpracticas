let productsArr = [
    {
      id: '1000',
      product: 'Fresas de Huelva',
      price: 410,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/fresas.jpg',
    },
    {
      id: '1001',
      product: 'Kiwi amarillo',
      price: 245,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/kiwis.jpg',
    },
    {
      id: '1002',
      product: 'Manzana roja',
      price: 195,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_rojas.jpg',
    },
    {
      id: '1003',
      product: 'Manzana verde',
      price: 170,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_verdes.jpg',
    },
    {
      id: '1004',
      product: 'Melón',
      price: 135,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/melones.jpg',
    },
    {
      id: '1005',
      product: 'Naranja valenciana',
      price: 160,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/naranjas.jpg',
    },
    {
      id: '1006',
      product: 'Pera conferencia',
      price: 210,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/peras.jpg',
    },
    {
      id: '1007',
      product: 'Plátano',
      price: 260,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/platanos.jpg',
    },
    {
      id: '1008',
      product: 'Sandía',
      price: 115,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/sandias.jpg',
    },
    {
      id: '1009',
      product: 'Uva',
      price: 195,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/uvas.jpg',
    },
    {
      id: '1010',
      product: 'Aguacate',
      price: 415,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/aguacate.jpg',
    },
    {
      id: '1011',
      product: 'Cereza del Bierzo',
      price: 520,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/cereza.jpg',
    },
    {
      id: '1012',
      product: 'Granada',
      price: 310,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/granada.jpg',
    },
    {
      id: '1013',
      product: 'Limón',
      price: 155,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/limon.jpg',
    },
    {
      id: '1014',
      product: 'Nectarina',
      price: 180,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/nectarina.jpg',
    },
    {
      id: '1015',
      product: 'Piña',
      price: 320,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/pineapple.jpg',
    },
  
  ];
  let pagina = 1;
  let paginasMax = productsArr.length/8;
  productsArr.filter((item,index) => ((index/8)>=pagina-1 && (index/8)<pagina))
             .forEach(generarProducto);
  console.log("prueva funcinamiento scrip");
  //cremos la barra de nabegacion
  //creo las divisiones que van ha integrar el navegador
  let divProducts = document.querySelector('#products-section');
  let divNavegacion = craerDivConClass('navegacion');

// creo el boton de siguiente
  let butonNext = document.createElement('button');
  butonNext.textContent = ">";
  butonNext.setAttribute("data-action","next");
  //creo el boton de atras
  let butonBack = document.createElement('button');
  butonBack.textContent = "<";
  butonBack.setAttribute("data-action","back");
  //creo el texto de mitad d elos dos botones
  let texto = document.createElement('label');
  texto.textContent = `Pagina ${pagina} de ${paginasMax}` ; 
  divProducts.prepend(divNavegacion);
  divNavegacion.append(butonBack);
  divNavegacion.append(texto);
  divNavegacion.append(butonNext);
  butonBack.addEventListener("click",pasarPaguina);
  butonNext.addEventListener("click",pasarPaguina);
  
  //
  function pasarPaguina(event){
    let accion = event.target.dataset.action;
    console.log(accion);
    console.log("la pagina es "+pagina );
    console.log("la pagina Maxima es "+paginasMax );
    if(accion == "back"){
      pagina = pagina == 1 ? pagina: pagina -1; 
    };   
    if(accion == "next"){
      //pagina = pagina != paginasMax ? pagina: pagina++;
      if(pagina != paginasMax){
         pagina++;
      }else{
        console.log("no sumo ");
      }
    }
    productsArr.filter((item,index) => ((index/8)>=pagina-1 && (index/8)<pagina))
             .forEach(generarProducto);
    //console.log("prueva funcinamiento scrip");
  }
  



  //rerremos todos los elemtos d ela lista y vamos creando un producto por cad ainteraccion

  // de item destructuracion 
  
  function generarProducto({image, id, price, product},index){
    // {
    //     id: '1000',
    //     product: 'Fresas de Huelva',
    //     price: 410,
    //     image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/fresas.jpg',
    //   },
    //leemos y guardamos en codigo la division qeu conntiene los productos
    let divProducts = document.querySelector('#products-section');
    //cramos la division de productos y la ñadimos a la division principal
    let divProducto = craerDivConClass("producto");
    divProducts.append(divProducto);
    //console.log(`debug//= vuelta ${index} // imagen =${image} ` );
    let divProductoData = craerDivConClass('producto-data');
    divProducto.append(divProductoData);
    //añadimos el nombre de la fruta
    let nombre = document.createElement('h3');
    nombre.textContent = product;
    divProducto.prepend(nombre);
    //como hija de la div de producto genramos la imagen atraves de la funcion
    let img = crarImg(image, product);
    divProducto.prepend(img);
    //ahora cramos la division que englova los datos inferiores de precio y el boton
    let divDatos = craerDivConClass('datos');
    divProductoData.append(divDatos);
    //cramos la div del precio la añadimos a la anterir 
    //despues creamos un parrafo donde introducir el tecto y le doy formado
    let divPrecio = craerDivConClass('precio')
    divDatos.append(divPrecio);
    let precio = document.createElement('p');
    precio.textContent = price/100 +"€/kg";
    divPrecio.prepend(precio);
    //cramos la div del boton. cremos el boton y le añadimos un id
    //y hacemos el evento que recoja que fruta he comprado
    let divBoton = craerDivConClass('boton');
    divDatos.append(divBoton);
    let boton = document.createElement('button');
    boton.textContent = "añadir";
    boton.setAttribute("data-id",id);
    boton.addEventListener("click", anadirCarrito);
    divBoton.append(boton);

  }
    

function anadirCarrito(event){
  console.log(event.target.dataset.id);

}
function craerDivConClass(clase){
    let div = document.createElement('div');
    div.classList.add(clase);
    return div;
}
function crarImg(src, alt){
    let img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    return img;
}

