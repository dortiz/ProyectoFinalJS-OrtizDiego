import { productos } from './stock.js';

// Función para cargar productos desde JSON
async function cargarProductos() {
    try {
        const response = await fetch('./json/products.json');
        const data = await response.json();
        productos.push(...data);
        mostrarProductos();
    } catch (error) {
        console.error("Error al cargar los productos:", error);
    }
}

// Función para mostrar productos
function mostrarProductos() {
    const contenedorProductos = document.getElementById('productos');
    contenedorProductos.innerHTML = '';
    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.className = 'col-md-4';
        productoDiv.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text">Precio: $${producto.precio.toFixed(2)}</p>
                    <button class="btn btn-primary" data-id="${producto.id}">Agregar al Carrito</button>
                </div>
            </div>
        `;
        contenedorProductos.appendChild(productoDiv);
    });
}

// Función para cargar carrito desde localStorage
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
});
