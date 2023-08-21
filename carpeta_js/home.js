import { usuariosService } from "../services/usuarios-service.js";

const btnIniciarSeccion = document.querySelector("#iniciar-sesion");
btnIniciarSeccion.addEventListener("clic", (evento) => {
  evento.preventDefault();
  // usuariosService.listaUsuarios();
  loginUsuario();
});

const loginUsuario = document.querySelector("[data-form-registro-login]");
loginUsuario.addEventListener("submit", (eventoSubmit) => {
  eventoSubmit.preventDefault();

  const correoIngresado = document.querySelector("[data-form-usuario]").value;
  const passwordIngresada = document.querySelector("[data-form-contraseña]").value;
  // console.log(correoIngresado);
  // console.log(passwordIngresada);
  usuariosService.listaUsuarios().then(() => {
    var correo = "ana@gmail.com";
    var password = "1234aB";
    if (correoIngresado === correo && passwordIngresada === password) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Exitoso",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(function () {
        window.location.href = "./admin-producto.html";
      }, 2000);
    }else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Datos incorrectos",
      });
    }
  });
});












// const btnIniciarSeccion = document.querySelector("#iniciar-sesion");
// btnIniciarSeccion.addEventListener("clic", (evento) => {
//     evento.preventDefault();
//     // usuariosService.listaUsuarios();
//     loginUsuario();
// });

// const loginUsuario = document.querySelector("[data-form-registro-login]");
// loginUsuario.addEventListener("submit", (eventoSubmit) => {
//     eventoSubmit.preventDefault();

//     const correoIngresado = document.querySelector("[data-form-usuario]").value;
//     const passwordIngresada = document.querySelector("[data-form-contraseña]").value;
//     console.log(correoIngresado);
//     console.log(passwordIngresada);
//     usuariosService.listaUsuarios()
//         .then(respuesta => {
//             respuesta.forEach(usuarios => {
//                 if (usuarios.correo === correoIngresado.value && usuarios.password === passwordIngresada.value) {
//                     Swal.fire({
//                         position: "center",
//                         icon: "success",
//                         title: "Login Exitoso",
//                         showConfirmButton: false,
//                         timer: 1500,
//                     });
//                     setTimeout(function () {
//                         window.location.href = "./admin-producto.html";
//                     }, 2000);
                    

//                 } else {
//                     Swal.fire({
//                         icon: "error",
//                         title: "Oops...",
//                         text: "Datos incorrectos",
//                     });
//                 }
//             });
//     })
// });