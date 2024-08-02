import { productos } from './stock.js';

let carrito = [];

// Cargar carrito desde localStorage
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
}

// Guardar carrito en localStorage
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje) {
    const contenedorNotificaciones = document.getElementById('notifications');
    const notificacion = document.createElement('div');
    notificacion.className = 'notification alert alert-info';
    notificacion.innerText = mensaje;
    contenedorNotificaciones.appendChild(notificacion);
    setTimeout(() => {
        contenedorNotificaciones.removeChild(notificacion);
    }, 3000);
}

// Función para mostrar productos
function mostrarProductos() {
    const productosOrdenados = productos.slice().sort((a, b) => a.precio - b.precio);
    const contenedorProductos = document.getElementById('productos');
    contenedorProductos.innerHTML = '';
    productosOrdenados.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.className = 'col-md-4';
        productoDiv.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text">Tipo: ${producto.tipo}</p>
                    <p class="card-text">Precio: $${producto.precio.toFixed(2)}</p>
                    <button class="btn btn-primary" data-id="${producto.id}">Agregar al Carrito</button>
                </div>
            </div>
        `;
        contenedorProductos.appendChild(productoDiv);
    });

    document.querySelectorAll('.card button').forEach(button => {
        button.addEventListener('click', (e) => {
            const idProducto = parseInt(e.target.getAttribute('data-id'));
            const producto = productos.find(p => p.id === idProducto);
            agregarProductoAlCarrito(producto);
        });
    });
}

// Función para agregar producto al carrito
function agregarProductoAlCarrito(producto) {
    if (producto) {
        carrito.push(producto);
        mostrarNotificacion(`Seleccionaste ${producto.nombre}. Valor: $${producto.precio.toFixed(2)}`);
        mostrarCarrito();
        guardarCarrito();
    }
}

// Función para mostrar carrito
function mostrarCarrito() {
    const contenedorCarrito = document.getElementById('carrito');
    contenedorCarrito.innerHTML = '';
    carrito.forEach((producto, index) => {
        const productoDiv = document.createElement('div');
        productoDiv.className = 'd-flex justify-content-between align-items-center';
        productoDiv.innerHTML = `
            <p class="mb-1">${index + 1}. ${producto.nombre}</p>
            <button class="btn btn-danger btn-sm" data-index="${index}">Eliminar</button>
        `;
        contenedorCarrito.appendChild(productoDiv);
    });

    document.querySelectorAll('#carrito button').forEach(button => {
        button.addEventListener('click', (e) => {
            const indexProducto = parseInt(e.target.getAttribute('data-index'));
            eliminarProductoDelCarrito(indexProducto);
        });
    });

    document.getElementById('total').innerText = `Total: $${calcularTotal().toFixed(2)}`;
}

// Función para eliminar producto del carrito
function eliminarProductoDelCarrito(index) {
    if (index >= 0 && index < carrito.length) {
        carrito.splice(index, 1);
        mostrarNotificacion("Producto eliminado del carrito.");
        mostrarCarrito();
        guardarCarrito();
    } else {
        mostrarNotificacion("Opción inválida.");
    }
}

// Función para calcular el total del carrito
function calcularTotal() {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
}

// Función para finalizar la compra
function finalizarCompra() {
    if (carrito.length === 0) {
        mostrarNotificacion("El carrito está vacío.");
        return;
    }
    let mensaje = "Productos en tu carrito:\n";
    carrito.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.nombre}\n`;
    });
    mensaje += `\nTotal: $${calcularTotal().toFixed(2)}\n¡Gracias por tu compra!`;
    mostrarNotificacion(mensaje);
    carrito.length = 0;
    guardarCarrito();
    mostrarCarrito();
}

// Eventos del DOM
document.getElementById('finalizarCompra').addEventListener('click', finalizarCompra);

// Inicialización
cargarCarrito();
mostrarProductos();
mostrarCarrito();
