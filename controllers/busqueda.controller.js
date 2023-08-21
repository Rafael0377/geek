//Buscador lupita
const buscador = document.querySelector("[data-buscador]");
//Enviando nombre de la busqueda a pagina resultados busqueda
buscador.addEventListener("input", evento => {
   const texto = evento.target.value;
   buscador.addEventListener("keypress", eventoDos => {
     if(eventoDos.key === 'Enter') {
      window.location.href = `../screens/busqueda.html?texto=${texto}`;
      buscador.value="";
     }
   });
});