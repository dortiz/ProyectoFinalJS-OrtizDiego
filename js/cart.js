import { mostrarCarrito } from './dom.js';
import Swal from 'sweetalert2';

// Función para cargar el carrito desde el almacenamiento local
export function cargarCarrito() {
    return JSON.parse(localStorage.getItem('carrito')) || [];
}

// Función para guardar el carrito en el almacenamiento local
export function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para agregar un producto al carrito
export function agregarProductoAlCarrito(producto) {
    let carrito = cargarCarrito();
    const productoExistente = carrito.find(item => item.id === producto.id);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    guardarCarrito(carrito);
    Swal.fire(`Producto ${producto.nombre} agregado al carrito`);
    mostrarCarrito();
}

// Función para eliminar un producto del carrito
export function eliminarProductoDelCarrito(idProducto) {
    let carrito = cargarCarrito();
    carrito = carrito.filter(producto => producto.id !== idProducto);

    guardarCarrito(carrito);
    Swal.fire('Producto eliminado del carrito');
    mostrarCarrito();
}

// Función para calcular el total del carrito
export function calcularTotalCarrito() {
    const carrito = cargarCarrito();
    return carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
}

// Función para vaciar el carrito
export function vaciarCarrito() {
    localStorage.removeItem('carrito');
    mostrarCarrito();
}

// Mostrar el carrito actualizado
mostrarCarrito();
