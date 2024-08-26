import Swal from 'sweetalert2';
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
    Swal.fire({
        title: '¡Éxito!',
        text: `Producto ${producto.nombre} agregado al carrito`,
        icon: 'success'
    });
    mostrarCarrito();
}

export function eliminarProductoDelCarrito(idProducto) {
    let carrito = cargarCarrito();
    carrito = carrito.filter(producto => producto.id !== idProducto);

    guardarCarrito(carrito);
    Swal.fire({
        title: '¡Eliminado!',
        text: 'Producto eliminado del carrito',
        icon: 'info'
    });
    mostrarCarrito();
}

export function calcularTotalCarrito() {
    const carrito = cargarCarrito();
    return carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
}

export function vaciarCarrito() {
    localStorage.removeItem('carrito');
    mostrarCarrito();
}

export function inicializarApp() {
    mostrarCarrito();
}
