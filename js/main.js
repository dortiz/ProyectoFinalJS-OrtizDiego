import { obtenerProductos } from './api.js';
import { mostrarProductos } from './dom.js';
import { inicializarApp } from './cart.js';

// Inicialización de la aplicación
async function iniciarApp() {
    try {
        const productos = await obtenerProductos();
        console.log('Productos obtenidos:', productos);
        localStorage.setItem('productos', JSON.stringify(productos));
        mostrarProductos(productos);
        inicializarApp();
    } catch (error) {
        console.error('Error al iniciar la aplicación:', error);
        Swal.fire('Error al cargar la aplicación. Intenta nuevamente más tarde.');
    }
}

// Llamada a la función de inicialización al cargar el script
iniciarApp();
