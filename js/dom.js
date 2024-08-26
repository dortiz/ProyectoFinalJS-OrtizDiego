import { cargarCarrito, eliminarProductoDelCarrito, calcularTotalCarrito } from './cart.js';

export function mostrarProductos(productos) {
    const contenedorProductos = document.getElementById('productos');
    contenedorProductos.innerHTML = '';

    productos.forEach(producto => {
        const productoHTML = `
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">$${producto.precio.toFixed(2)}</p>
                        <button class="btn btn-primary agregar-carrito" data-id="${producto.id}">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        `;
        contenedorProductos.innerHTML += productoHTML;
    });
}

export function mostrarCarrito() {
    const contenedorCarrito = document.getElementById('carrito');
    const carrito = cargarCarrito();
    contenedorCarrito.innerHTML = '';

    carrito.forEach((producto, index) => {
        contenedorCarrito.innerHTML += `
            <div class="d-flex justify-content-between align-items-center">
                <p>${index + 1}. ${producto.nombre} (x${producto.cantidad}) - $${(producto.precio * producto.cantidad).toFixed(2)}</p>
                <button class="btn btn-danger eliminar-producto" data-id="${producto.id}">Eliminar</button>
            </div>
        `;
    });

    const total = calcularTotalCarrito();
    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}