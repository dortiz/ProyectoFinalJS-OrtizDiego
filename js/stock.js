import { obtenerProductos } from './api.js';
import { mostrarProductos } from './dom.js';

async function inicializarProductos() {
    let productos = JSON.parse(localStorage.getItem('productos'));

    if (!productos || productos.length === 0) {
        productos = await obtenerProductos();
        localStorage.setItem('productos', JSON.stringify(productos));
    }

    mostrarProductos(productos);
}

inicializarProductos();
