import { mostrarCarrito } from './dom.js';
import { vaciarCarrito, calcularTotalCarrito } from './cart.js';

// Mostrar el carrito cuando se hace clic en el icono
document.getElementById('cart-icon').addEventListener('click', () => {
    mostrarCarrito();
    document.getElementById('cart-modal').style.display = 'block';
});

// Cerrar el modal cuando se hace clic en el botón de cerrar
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
});

// Finalizar la compra
document.getElementById('finalizarCompra').addEventListener('click', () => {
    const carrito = cargarCarrito();
    if (carrito.length === 0) {
        Toastify({
            text: 'El carrito está vacío.',
            duration: 3000,
            backgroundColor: '#e74c3c'
        }).showToast();
    } else {
        const total = calcularTotalCarrito();
        Toastify({
            text: `Compra finalizada. Total: $${total.toFixed(2)}. ¡Gracias por tu compra!`,
            duration: 3000,
            backgroundColor: '#2ecc71'
        }).showToast();
        vaciarCarrito();
        mostrarCarrito();  // Actualizar la vista del carrito
        document.getElementById('cart-modal').style.display = 'none'; // Cerrar el modal después de finalizar la compra
    }
});