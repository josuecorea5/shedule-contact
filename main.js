const nombre = document.querySelector('.nombre');
const numero = document.querySelector('.numero');
const direccion = document.querySelector('.direccion');
const btnAgregarTarea = document.querySelector('.btn-agregar-tarea');
const listadoTareas = document.querySelector('.listado-contactos');

const dbLocalStorage = window.localStorage;

btnAgregarTarea.onclick = () => {
  let contacto = {
    id: Math.floor(Math.random() * (100 - 1)) + 1,
    nombre: nombre.value,
    numero: numero.value,
    direccion: direccion.value
  }
  guardarContacto(dbLocalStorage,contacto);
}

cargarContactos(dbLocalStorage, listadoTareas);