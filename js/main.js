import { mostrarProductos } from './dom.js';
import { mostrarCarrito } from './dom.js';
import { obtenerProductos } from './api.js';

async function inicializarAplicacion() {
    const productos = await obtenerProductos();
    mostrarProductos(productos);
    mostrarCarrito();
}

inicializarAplicacion();
