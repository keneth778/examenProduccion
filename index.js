// index.js
import { cargarBloques } from './componentes/bloques/bloques.js';
import { mostrarMenu } from './componentes/header/header.js';

function iniciarApp() {
    let app = document.querySelector("#root");

    // Crear el contenedor principal
    let contenedor = document.createElement('div');
    contenedor.className = "contenedor";

    // Crear el header
    let header = document.createElement('header');
    header.innerHTML = `
        <h1>total</h1>
        <div id="contador-productos"></div>
    `;
    contenedor.appendChild(header);

    // Crear el contenedor de productos
    let divProductos = document.createElement('div');
    divProductos.id = "contenedor-productos";
    divProductos.className = "div_productos";
    contenedor.appendChild(divProductos);


    // Añadir el contenedor al DOM
    app.appendChild(contenedor);

    // Cargar los productos y mostrar el menú
    cargarBloques();
    mostrarMenu();
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', iniciarApp);