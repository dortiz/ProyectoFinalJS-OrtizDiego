import { agregarProductoAlCarrito, cargarCarrito, vaciarCarrito, calcularTotalCarrito } from './cart.js';
import Swal from 'sweetalert2';

let carrito = cargarCarrito();

document.getElementById('productos').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const idProducto = parseInt(e.target.getAttribute('data-id'));
        const productos = JSON.parse(localStorage.getItem('productos'));
        const producto = productos.find(p => p.id === idProducto);
        agregarProductoAlCarrito(producto);
    }
});

document.getElementById('finalizarCompra').addEventListener('click', () => {
    if (carrito.length === 0) {
        Swal.fire('El carrito está vacío.');
    } else {
        const total = calcularTotalCarrito();
        Swal.fire(`Compra finalizada. Total: $${total.toFixed(2)}. ¡Gracias por tu compra!`);
        vaciarCarrito();
    }
});
