// dom.js
import { cargarCarrito, calcularTotalCarrito } from './cart.js';

export function mostrarProductos(productos) {
    const contenedorProductos = document.getElementById('productos');
    contenedorProductos.innerHTML = '';

    productos.forEach(producto => {
        const productCard = `
            <div class="col-md-4">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <p class="card-text">Precio: $${producto.precio.toFixed(2)}</p>
                        <button class="btn btn-primary" data-id="${producto.id}">Agregar al Carrito</button>
                    </div>
                </div>
            </div>`;
        contenedorProductos.innerHTML += productCard;
    });
}

export function mostrarCarrito() {
    const contenedorCarrito = document.getElementById('carrito');
    const carrito = cargarCarrito();
    contenedorCarrito.innerHTML = '';

    carrito.forEach((producto, index) => {
        contenedorCarrito.innerHTML += `<p>${index + 1}. ${producto.nombre} (x${producto.cantidad}) - $${(producto.precio * producto.cantidad).toFixed(2)}</p>`;
    });

    const total = calcularTotalCarrito();
    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}
