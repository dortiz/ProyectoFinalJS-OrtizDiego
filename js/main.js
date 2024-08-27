import { mostrarProductos } from './dom.js';
import { obtenerProductos } from './api.js';

async function inicializarAplicacion() {
    const productos = await obtenerProductos();
    mostrarProductos(productos);
}

document.addEventListener('DOMContentLoaded', () => {
    inicializarAplicacion();

    const loadingOverlay = document.getElementById('loading');
    setTimeout(() => {
        loadingOverlay.style.display = 'none'; 
    }, 3000); 
});

