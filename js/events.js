import { agregarProductoAlCarrito, vaciarCarrito, cargarCarrito, calcularTotalCarrito } from './cart.js';
import { mostrarCarrito } from './dom.js';
import Swal from 'sweetalert2';

document.getElementById('productos').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const idProducto = parseInt(e.target.getAttribute('data-id'));
        const productos = JSON.parse(localStorage.getItem('productos'));
        const producto = productos.find(p => p.id === idProducto);
        agregarProductoAlCarrito(producto);
    }
});

document.getElementById('finalizarCompra').addEventListener('click', () => {
    const carrito = cargarCarrito();
    if (carrito.length === 0) {
        Swal.fire({
            title: 'Carrito Vacío',
            text: 'El carrito está vacío.',
            icon: 'warning'
        });
    } else {
        const total = calcularTotalCarrito();
        Swal.fire({
            title: 'Compra Finalizada',
            text: `Total: $${total.toFixed(2)}. ¡Gracias por tu compra!`,
            icon: 'success'
        });
        vaciarCarrito();
    }
});
