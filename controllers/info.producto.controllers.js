import { clientServices } from "../services/client-service.js";

//Creando la card del producto
const mostrarProductosRelacionados = (nombre, precio, descripcion, imagen, id, categoria) => {
    //Creando el div que guarda todo el card
    const cardProducto = document.createElement("div");
    cardProducto.className = "producto__card";
    const contenido = `
    <div class="img-container">
    <img class="img-producto" src="${imagen}" alt="">
  </div>
    <div class="shopping-cart">
            <p class="cart-detail">${nombre}</p>
            <p class="cart-price">${precio}</p>
            <a href="../screens/info-producto.html?id=${id}">Ver producto</a>
    </div>
  </div`
    cardProducto.innerHTML = contenido;
    cardProducto.dataset.id = id;
  
    return cardProducto;
  };

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    //Extraccion ID de la URL
    const id = url.searchParams.get("id");

    if(id === null){
        console.log("Hubo error al momento de buscar el producto");
    }
    
    //Traemos la informacion del producto que fue clickado
    try{
        const producto = await clientServices.detalleProducto(id);
        //Validamos que ese ID tenga informacion
        if(producto.nombre && producto.precio && producto.descripcion  && producto.imagen){
        //Contenedo de la informacion
        const infoProducto = document.querySelector("[data-producto]");

        const contenido = `
        <img src="${producto.imagen}" alt="">
              <div class="descripcion-producto">
                <h2>${producto.nombre}</h2>
                <p>${producto.precio}</p>
                <p>${producto.descripcion} </p>
              </div> 
      ` 
     //Pasamos los detalles del producto
     infoProducto.innerHTML = contenido;

     //Productos relacionados segun categoria
     const categoriaSolicitada = producto.categoria;
     const idProductoVisto = producto.id;

     const productosSimilares = document.querySelector("[data-productos-similares]");
     clientServices.listaProductos().then(data => {
       data.forEach(({nombre, precio, descripcion, imagen, id, categoria}) => {
         //Imprimir datos en el index
         if(categoria === "Star wars" && categoriaSolicitada === "Star wars" && idProductoVisto != id){
           const nuevoProducto = mostrarProductosRelacionados(nombre, precio, descripcion, imagen, id, categoria);
           productosSimilares.appendChild(nuevoProducto);
         }else if(categoria === "Consolas" && categoriaSolicitada === "Consolas" && idProductoVisto != id){
           const nuevoProducto = mostrarProductosRelacionados(nombre, precio, descripcion, imagen, id, categoria);
           productosSimilares.appendChild(nuevoProducto);
         }else if(categoria === "Diversos" && categoriaSolicitada === "Diversos" && idProductoVisto != id){
           const nuevoProducto = mostrarProductosRelacionados(nombre, precio, descripcion, imagen, id, categoria);
           productosSimilares.appendChild(nuevoProducto);
         }
       });
     }).catch( error => alert("Ocurrio un error en vista"));
   }else{
     throw new error();
   }
 }catch(error){
   console.log("catch error", error);
 }

 
} 
obtenerInformacion();