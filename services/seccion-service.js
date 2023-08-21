document.addEventListener('DOMContentLoaded', () => {
    sesionActiva();
 })

const btnLogin = document.querySelector('#btn-login');
const btnAgregarProducto = document.querySelector('#btn-add-producto');

function sesionActiva() {

const sesionIniciada = localStorage.getItem('autenticado');

   if (sesionIniciada) {

          btnLogin.textContent = 'Cerrar sesión';
          btnLogin.href = '';

      if (btnAgregarProducto) {
            btnAgregarProducto.textContent = 'Agregar Producto';
            btnAgregarProducto.href = '../add-producto.html'
            btnAgregarProducto.classList.add('btn-add-producto');
    }

  } else {

    btnLogin.textContent = 'Login';
    btnLogin.href = '../home.html';

    if(btnAgregarProducto) {
       btnAgregarProducto.classList.remove('btn-add-producto');
    }
 }

  if (btnLogin.textContent === 'Cerrar sesión') {

        btnLogin.onclick = () => {
        localStorage.clear();
     }
  }
 }