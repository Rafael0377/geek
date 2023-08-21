import { clientServices } from "../services/client-service.js";

const productos = document.querySelector("[data-productos-admin]");

//Creando la card del producto
const MostrarProductosAdmin = (
  nombre,
  precio,
  descripcion,
  imagen,
  id,
  categoria
) => {
  //Creando el div que guarda todo el card
  const cardProducto = document.createElement("div");
  cardProducto.className = "producto__card";
  const contenido = `
   <div class="img-container">
     <img class="img-producto" src="${imagen}" alt="">
     <a class="trash-icon"  id="${id}" href="#"><img src='./carpeta_imagenes/Trash-icon.svg' alt="boton eliminar"></a>
     <a class="pencil-icon" href="./screens/editar-producto.html?id=${id}"><img src="./carpeta_imagenes/pencil-icon.svg"></a>
     </div>
  <div class="shopping-cart">
           <p class="cart-detail">${nombre}</p>
           <p class="cart-price">${precio}</p>
           <p class="cart-detail"></p>
   </div>
 </div`
  cardProducto.innerHTML = contenido;
  // console.log(cardProducto);
  // return cardProducto;
  // cardProducto.dataset.id = id;

  const btnEliminar = cardProducto.querySelector(".trash-icon");

  btnEliminar.addEventListener("click", () => {
    const id = btnEliminar.id;
    Swal.fire({
      title: "Estas seguro?",
      text: `Quieres eliminar el producto: ${nombre} ? esta accion no es revertible!`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminarlo!",
    }).then((result) => {
      if (result.isConfirmed) {
        clientServices
          .eliminarProducto(id)
          .then((respuesta) => {
            console.log(respuesta);
          })
          .catch((error) => alert("Ocurrio un error al momento de eliminar"));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "El producto ha sido eliminado",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(function () {
          const limpiarContenido = ``;
          productos.innerHTML = limpiarContenido;
          imprimirProductos();
        }, 1700);
      }
    });
  });

  // cardProducto.dataset.id = id;
  return cardProducto;
};

//Capturando la seccion para mostrar los productos
const productosAdmin = document.querySelector("[data-productos-admin]");

const imprimirProductos = () => {
  //Recorrer los datos traidos del JSON
  clientServices
    .listaProductos()
    .then((data) => {
      data.forEach(({nombre, precio, descripcion, imagen, id, categoria }) => {
        //Imprimir datos en el index
        const nuevoProducto = MostrarProductosAdmin(
          nombre,
          precio,
          descripcion,
          imagen,
          id,
          categoria
        );
        productosAdmin.appendChild(nuevoProducto);
      });
    })
    .catch((error) => alert("ocurrio un error"));
};
imprimirProductos();

export const adminProductosController = {
  MostrarProductosAdmin
};












// import { clientServices } from "../services/client-service.js";

// const productos = document.querySelector("[data-productos-admin]");

// //Creando la card del producto
// const MostrarProductosAdmin = (
//   nombre,
//   precio,
//   descripcion,
//   imagen,
//   id,
//   categoria
// ) => {
//   //Creando el div que guarda todo el card
//   const cardProducto = document.createElement("div");
//   cardProducto.className = "producto__card";
//   const contenido = `
//    <div class="img-container">
//      <img class="img-producto" src="${imagen}" alt="">
//      <a id="${id}" href="#"><img class="trash-icon" src='../carpeta_imagenes/Trash-icon.svg' alt="boton eliminar"></a>
//      <a href="../screens/editar-producto.html?id=${id}"><img class="pencil-icon" src="../carpeta_imagenes/pencil-icon.svg"></a>
//      </div>
//   <div class="shopping-cart">
//            <p class="cart-detail">${nombre}</p>
//            <p class="cart-price">${precio}</p>
//            <p class="cart-detail"></p>
//    </div>
//  </div`
//   cardProducto.innerHTML = contenido;
//   // console.log(cardProducto);
//   // return cardProducto;
//   // cardProducto.dataset.id = id;

//   const btnEliminar = cardProducto.querySelector(".trash-icon");

//   btnEliminar.addEventListener("click", () => {
//     const id = btnEliminar.id;
//     Swal.fire({
//       title: "Estas seguro?",
//       text: `Quieres eliminar el producto: ${nombre} ? esta accion no es revertible!`,
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Si, eliminarlo!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         clientServices
//           .eliminarProducto(id)
//           .then((respuesta) => {
//             console.log(respuesta);
//           })
//           .catch((error) => alert("Ocurrio un error al momento de eliminar"));
//         Swal.fire({
//           position: "center",
//           icon: "success",
//           title: "El producto ha sido eliminado",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//         setTimeout(function () {
//           const limpiarContenido = ``;
//           productos.innerHTML = limpiarContenido;
//           imprimirProductos();
//         }, 1700);
//       }
//     });
//   });

//   // cardProducto.dataset.id = id;
//   return cardProducto;
// };

// //Capturando la seccion para mostrar los productos
// const productosAdmin = document.querySelector("[data-productos-admin]");

// const imprimirProductos = () => {
//   //Recorrer los datos traidos del JSON
//   clientServices
//     .listaProductos()
//     .then((data) => {
//       data.forEach(({nombre, precio, descripcion, imagen, id, categoria}) => {
//         //Imprimir datos en el index
//         const nuevoProducto = MostrarProductosAdmin(
//           nombre,
//           precio,
//           descripcion,
//           imagen,
//           id,
//           categoria
//         );
//         productosAdmin.appendChild(nuevoProducto);
//       });
//     })
//     .catch((error) => alert("ocurrio un error"));
// };
// imprimirProductos();

// export const adminProductosController = {
//   MostrarProductosAdmin
// };