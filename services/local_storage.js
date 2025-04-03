export function actualizarLocalstorage(id) {
    const bloque = document.querySelector(`.producto[data-id="${id}"]`);
    if (bloque) {
        bloque.classList.toggle('resaltado'); // Alternar la clase 'resaltado'
        actualizarContador(); // Llamar a la función para actualizar el contador
    }
}