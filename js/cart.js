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
    Toastify({
        text: `Producto ${producto.nombre} agregado al carrito.`,
        duration: 3000,
        backgroundColor: '#2ecc71'
    }).showToast();
    mostrarCarrito(); 
}

export function eliminarProductoDelCarrito(idProducto) {
    let carrito = cargarCarrito();
    carrito = carrito.filter(producto => producto.id !== idProducto);

    guardarCarrito(carrito);
    Toastify({
        text: 'Producto eliminado del carrito.',
        duration: 3000,
        backgroundColor: '#e74c3c'
    }).showToast();
    mostrarCarrito();
}

export function calcularTotalCarrito() {
    const carrito = cargarCarrito();
    return carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
}

export function vaciarCarrito() {
    localStorage.removeItem('carrito');
    Toastify({
        text: 'Carrito vacío.',
        duration: 3000,
        backgroundColor: '#e74c3c'
    }).showToast();
}