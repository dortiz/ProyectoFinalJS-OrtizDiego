import { agregarProductoAlCarrito, eliminarProductoDelCarrito, vaciarCarrito, calcularTotalCarrito, cargarCarrito } from './cart.js';

// Manejador de eventos para agregar productos al carrito
document.getElementById('productos').addEventListener('click', (event) => {
    if (event.target.classList.contains('agregar-carrito')) {
        const idProducto = parseInt(event.target.getAttribute('data-id'), 10);
        const productos = JSON.parse(localStorage.getItem('productos'));
        const producto = productos.find(p => p.id === idProducto);
        if (producto) {
            agregarProductoAlCarrito(producto);
        }
    }
});

// Manejador de eventos para eliminar productos del carrito
document.getElementById('carrito').addEventListener('click', (event) => {
    if (event.target.classList.contains('eliminar-producto')) {
        const idProducto = parseInt(event.target.getAttribute('data-id'), 10);
        eliminarProductoDelCarrito(idProducto);
    }
});

// Manejador de eventos para finalizar la compra
document.getElementById('finalizarCompra').addEventListener('click', () => {
    const carrito = cargarCarrito();
    if (carrito.length === 0) {
        Toastify({
            text: 'El carrito está vacío.',
            duration: 5000,
            gravity: 'top',
            position: 'right',
            backgroundColor: '#ff9800',
        }).showToast();
    } else {
        const total = calcularTotalCarrito();
        Toastify({
            text: `Compra finalizada. Total: $${total.toFixed(2)}. ¡Gracias por tu compra!`,
            duration: 5000,
            gravity: 'top',
            position: 'right',
            backgroundColor: '#4caf50',
        }).showToast();
        vaciarCarrito();  // Vacía el carrito después de finalizar la compra
    }
});

