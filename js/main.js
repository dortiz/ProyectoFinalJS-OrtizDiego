console.log('JavaScript está funcionando');
import { obtenerProductos } from './api.js';
import { mostrarProductos } from './dom.js';
import { inicializarApp } from './cart.js';

// Inicialización de la aplicación
async function iniciarApp() {
    const productos = await obtenerProductos();
    localStorage.setItem('productos', JSON.stringify(productos));
    mostrarProductos(productos);
    inicializarApp();
}

iniciarApp();
