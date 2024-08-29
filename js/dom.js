import { agregarProductoAlCarrito, cargarCarrito, eliminarProductoDelCarrito, calcularTotalCarrito, vaciarCarrito } from './cart.js';

// Mostrar productos en la página
export function mostrarProductos(productos) {
    const productosContainer = document.getElementById('productos');
    productosContainer.innerHTML = '';

    productos.forEach((producto) => {
        productosContainer.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card" style="width: 100%; height: 100%;">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}" style="object-fit: cover; height: 200px;">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <h6 class="card-title>${producto.descripcion}</h6>
                        <p class="card-text">$${producto.precio.toFixed(2)}</p>
                        <button class="btn btn-success" data-id="${producto.id}" data-nombre="${producto.nombre}" data-precio="${producto.precio}">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        `;
    });

    // Agregar eventos a los botones de agregar al carrito
    document.querySelectorAll('.btn-success').forEach(boton => {
        boton.addEventListener('click', (event) => {
            const id = parseInt(event.target.getAttribute('data-id'));
            const nombre = event.target.getAttribute('data-nombre');
            const precio = parseFloat(event.target.getAttribute('data-precio'));

            const producto = { id, nombre, precio };

            agregarProductoAlCarrito(producto);
            mostrarNotificacion(`Producto ${nombre} agregado al carrito.`, '#2ecc71');
            actualizarContadorCarrito(); // Actualiza el contador después de agregar un producto
        });
    });
}

// Mostrar carrito en el modal
export function mostrarCarrito() {
    const carrito = cargarCarrito();
    const carritoContainer = document.getElementById('carrito');
    const totalElement = document.getElementById('total');

    carritoContainer.innerHTML = '';
    carrito.forEach((producto, index) => {
        carritoContainer.innerHTML += `
            <div class="d-flex justify-content-between align-items-center mb-2 producto">
                <span>${index + 1}. ${producto.nombre} (x${producto.cantidad}) - $${(producto.precio * producto.cantidad).toFixed(2)}</span>
                <button class="btn btn-danger btn-sm btn-eliminar" data-id="${producto.id}">Eliminar</button>
            </div>
        `;
    });

    const total = calcularTotalCarrito();
    totalElement.textContent = `Total: $${total.toFixed(2)}`;

    // Agregar eventos a los botones de eliminar del carrito
    document.querySelectorAll('.btn-eliminar').forEach(boton => {
        boton.addEventListener('click', (event) => {
            const idProducto = parseInt(event.target.getAttribute('data-id'));
            eliminarProductoDelCarrito(idProducto);
            mostrarCarrito();
            actualizarContadorCarrito(); // Actualiza el contador después de eliminar un producto
        });
    });
}

// Función para actualizar el contador del carrito
export function actualizarContadorCarrito() {
    const carrito = cargarCarrito();
    const cartCount = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

// Función genérica para mostrar notificaciones
function mostrarNotificacion(mensaje, color) {
    // Elimina todas las notificaciones existentes
    document.querySelectorAll('.toastify').forEach(toast => toast.remove());

    // Muestra la nueva notificación
    Toastify({
        text: mensaje,
        duration: 3000,
        style: {
            background: color
        }
    }).showToast();
}

// Eventos de la ventana emergente del carrito
document.addEventListener('DOMContentLoaded', () => {
    // Mostrar/Ocultar el carrito al hacer clic en el ícono
    document.getElementById('cart-icon').addEventListener('click', () => {
        const cartModal = document.getElementById('cart-modal');
        const isVisible = cartModal.style.display === 'flex';
        cartModal.style.display = isVisible ? 'none' : 'flex';
        if (!isVisible) {
            mostrarCarrito();
        }
    });

    // Cerrar el modal cuando se hace clic en el botón de cerrar
    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('cart-modal').style.display = 'none';
    });

    // Botón de vaciar carrito
    document.getElementById('vaciarCarrito').addEventListener('click', () => {
        vaciarCarrito();
        mostrarCarrito();
        actualizarContadorCarrito();
        mostrarNotificacion('El carrito ha sido vaciado.', '#e74c3c');
    });

    // Botón de finalizar compra
    document.getElementById('finalizarCompra').addEventListener('click', () => {
        const carrito = cargarCarrito();
        if (carrito.length === 0) {
            mostrarNotificacion('El carrito está vacío. No se puede finalizar la compra.', '#e74c3c');
        } else {
            vaciarCarrito();
            mostrarCarrito();
            actualizarContadorCarrito();
            mostrarNotificacion('Compra finalizada con éxito.', '#2ecc71');
        }
    });

    // Inicializar el contador al cargar la página
    actualizarContadorCarrito();
});
