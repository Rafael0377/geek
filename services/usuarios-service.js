const listaUsuarios = () => fetch('https:/').then(respuesta => respuesta.json());

const crearUsuario = (correo, password) => {
    return fetch('https:/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({correo,password , id:uuid.v4()})
    });
  };

//Detalles del producto por ID
const detalleUsuario = async (id) => {
  return fetch(`https://${id}`).then( respuesta => respuesta.json());
};
export const usuariosService = {
    crearUsuario,
    detalleUsuario,
    listaUsuarios
}