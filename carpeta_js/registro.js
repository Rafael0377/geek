import { usuariosService } from "../services/usuarios-service.js";

const btnEnviar = document.querySelector("#crear-cuenta");
btnEnviar.addEventListener("submit", (evento) => {
    evento.preventDefault();
    formulariologin();
})

const formulariologin = document.querySelector("[data-form-registro-login]");
formulariologin.addEventListener("submit", (eventoSubmit) => {
  eventoSubmit.preventDefault();
  const correoIngresado = document.querySelector("[data-form-usuario]").value;
  const passwordIngresada= document.querySelector("[data-form-contraseña]").value;
  const repetirPasswordIngresado = document.querySelector("[data-form-rep-contraseña ]").value;

  const correoIngresadoVaciar= document.querySelector("[data-form-usuario]");
  const passwordIngresadaVaciar = document.querySelector("[data-form-contraseña]");
  const repetirPasswordIngVaciar = document.querySelector("[data-form-rep-contraseña]");
  
  //Enviando datos a la funcion que crea el usuario
 usuariosService.crearUsuario(correoIngresado, passwordIngresada ,repetirPasswordIngresado)
  .then(() => {
    console.log("envio exitoso");
    correoIngresadoVaciar.value = "";
    passwordIngresadaVaciar.value = "";
    repetirPasswordIngVaciar.value = "";
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Registro Exitoso',
      showConfirmButton: false,
      timer: 1500
    })

    // console.log(correoIngresado);
    // console.log(passwordIngresada);
    // console.log(repetirPasswordIngVaciar);

  }).catch((err) => console.log(err));
});


// export const registroController = {
//     btnEnviar,
//     formulariologin
// }