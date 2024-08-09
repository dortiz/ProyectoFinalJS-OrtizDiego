let carrito = cargarCarrito();

// Función para agregar producto al carrito
function agregarProductoAlCarrito(producto) {
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarNotificacion(`Seleccionaste ${producto.nombre}. Valor: $${producto.precio.toFixed(2)}`);
    mostrarCarrito();
}

// Evento para manejar la adición de productos al carrito
document.getElementById('productos').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const idProducto = parseInt(e.target.getAttribute('data-id'));
        const producto = productos.find(p => p.id === idProducto);
        agregarProductoAlCarrito(producto);
    }
});

// Evento para finalizar la compra
document.getElementById('finalizarCompra').addEventListener('click', () => {
    if (carrito.length === 0) {
        mostrarNotificacion("El carrito está vacío.");
    } else {
        const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
        mostrarNotificacion(`Compra finalizada. Total: $${total.toFixed(2)}. ¡Gracias por tu compra!`);
        carrito = [];
        localStorage.removeItem('carrito');
        mostrarCarrito();
    }
});

// Función para mostrar el carrito
function mostrarCarrito() {
    const contenedorCarrito = document.getElementById('carrito');
    contenedorCarrito.innerHTML = '';
    carrito.forEach((producto, index) => {
        contenedorCarrito.innerHTML += `<p>${index + 1}. ${producto.nombre}</p>`;
    });
    const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje) {
    const contenedorNotificaciones = document.getElementById('notifications');
    const notificacion = document.createElement('div');
    notificacion.className = 'notification alert alert-info';
    notificacion.innerText = mensaje;
    contenedorNotificaciones.appendChild(notificacion);
    setTimeout(() => {
        notificacion.remove();
    }, 3000);
}

// Inicialización del carrito
mostrarCarrito();
