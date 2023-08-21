//Creando la card del producto
export const MostrarProductos = (nombre, precio, descripcion, imagen, id, categoria) => {
    const cardProducto = document.createElement("div");
    cardProducto.className = "producto__card";
    const contenido =`<div class="product-card">
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
 }
 
 