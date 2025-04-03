// componentes/funciones/catalogo.js
import { productos } from '../../data.js';
import { bloque } from './itemBloque.js';
import { actualizarLocalstorage } from '../../services/local_storage.js';
export function cargarBloques() {
    const contenedorProductos = document.getElementById('contenedor-productos');

    productos.forEach(prod => {
        const item = bloque(prod); // Crear el elemento del producto
        contenedorProductos.appendChild(item);

        // Añadir evento para resaltar
        item.addEventListener('click', () => actualizarLocalstorage(prod.id)); // Click para resaltar
    });
}