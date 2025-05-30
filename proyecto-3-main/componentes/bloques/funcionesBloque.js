export function eliminarBloque(id) {
    const producto = document.querySelector(`.producto[data-id="${id}"]`);
    if (producto) {
        producto.remove(); // Eliminar el producto del DOM
        actualizarContador(); // Llamar a la función para actualizar el contador
    }
}



// Asignar evento de eliminar a los botones
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-eliminar')) {
        const producto = event.target.closest('.producto');
        const id = producto.getAttribute('data-id');
        eliminarBloque(id);
    }
});