// componentes/funciones/itemProducto.js
export function bloque(prod) {
    const item = document.createElement('div');
    item.classList.add('producto');
    item.setAttribute('data-id', prod.id); // Añadir un identificador único

    item.innerHTML = `
        <h3>${prod.nombre}</h3>
        <button class="btn-eliminar">x</button>
        <button class="btn-eliminar">/</button>

    `;

    return item;
}