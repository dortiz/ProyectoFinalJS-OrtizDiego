import { obtenerProductos } from './api.js';
import { mostrarProductos } from './dom.js';

async function inicializarProductos() {
    let productos = JSON.parse(localStorage.getItem('productos'));

    if (!productos || productos.length === 0) {
        try {
            productos = await obtenerProductos();
            localStorage.setItem('productos', JSON.stringify(productos));
        } catch (error) {
            console.error('Error al obtener productos:', error);
            productos = [2]; 
        }
    }

    mostrarProductos(productos);
}

inicializarProductos();