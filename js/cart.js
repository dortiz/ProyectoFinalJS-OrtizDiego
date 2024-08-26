import { mostrarCarrito } from './dom.js';

export function cargarCarrito() {
    return JSON.parse(localStorage.getItem('carrito')) || [];
}

export function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

export function agregarProductoAlCarrito(producto) {
    let carrito = cargarCarrito();
    const productoExistente = carrito.find(item => item.id === producto.id);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    guardarCarrito(carrito);
    mostrarCarrito();  // Actualiza el carrito en el DOM

    Toastify({
        text: `Producto ${producto.nombre} agregado al carrito`,
        duration: 5000,
        gravity: 'top',
        position: 'right',
        backgroundColor: '#4caf50',
    }).showToast();
}

export function eliminarProductoDelCarrito(idProducto) {
    let carrito = cargarCarrito();
    carrito = carrito.filter(producto => producto.id !== idProducto);

    guardarCarrito(carrito);
    mostrarCarrito();  // Actualiza el carrito en el DOM

    Toastify({
        text: 'Producto eliminado del carrito',
        duration: 5000,
        gravity: 'top',
        position: 'right',
        backgroundColor: '#f44336',
    }).showToast();
}

export function calcularTotalCarrito() {
    const carrito = cargarCarrito();
    return carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
}

export function vaciarCarrito() {
    localStorage.removeItem('carrito');
    mostrarCarrito();
}