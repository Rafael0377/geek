export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    //verificar si exiten los tipos de inputs existen en los validadores 
    if (tipoDeInput) {
        tipoDeInput.input;
    }
     console.log(input.parentElement);
    //verificar 
    //si es true quiero que se quite la clase
    //no existe un error
    if (input.validity.valid) {
        //remove para quitar la clase
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    } else {
        //remove para agregar la clase
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML =
            mostrarMensajeDeError(tipoDeInput, input);
    }
}
//interceptar dependiendo del tipo de input y debe mostrar su error de cada llave ejm valueMissing
//de cada uno de los objetos
const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
];

const mensajesTipoError = {
    //validaciones para sección contacto
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío",
    },

    mensaje: {
        valueMissing: "El campo Mensaje no puede estar vacio",
        patternMismatch: "El mensaje puede contener como máximo 300 carácteres",
    },

    //validaciones para sección iniciar sección
    correo: {
        valueMissing: "El campo email no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },

    password: {
        valueMissing: "El campo contraseña no puede estar vacío",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
    },

    //validaciones para agregar producto

    nombreProducto: {
        valueMissing: "El campo nombre no puede estar vacío",
        patternMismatch: "Sólo puede contener como maximo 40 caracteres"
    },
    precioProducto: {
        valueMissing: "El campo precio no puede estar vacío",
        patternMismatch: "Sólo puede ser ingresado en números"
    },
    descripcionProducto: {
        valueMissing: "El campo nombre no puede estar vacío",
        patternMismatch: "El mensaje puede contener como máximo 300 carácteres",
    }

}

function mostrarMensajeDeError(tipoDeInput, input) {
    //acceder a los mensajes que se declaran en la constante mensajeTipoError
    let mensaje = "";
    //recorrer cada tipo de errores
    tipoDeErrores.forEach((error) => {
        //si dentro de mi input validity se encuentra mi error
        if (input.validity[error]) {
            //verificar cuál es el tipo de error
            console.log(tipoDeInput, error);
            //verificar si es true o false el error
            console.log(input.validity[error]);
            //mostrar el tipo de error que se está generando  
            console.log(mensajesTipoError[tipoDeInput][error]);
            //acceder al mensajeTipoError segun el tipo de input y error
            mensaje = mensajesTipoError[tipoDeInput][error];
        }
    });
    return mensaje;
}