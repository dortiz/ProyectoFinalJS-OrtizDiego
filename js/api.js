export async function obtenerProductos() {
    try {
        const response = await fetch('./json/products.json');
        if (!response.ok) {
            throw new Error(`Error al obtener productos: ${response.statusText}`);
        }
        const productos = await response.json();
        return productos;
    } catch (error) {
        console.error('Error al cargar los productos:', error);
        Toastify({
            text: "Error al cargar los productos. Intenta nuevamente más tarde.",
            duration: 5000,
            backgroundColor: "#f44336",
            gravity: "top",
            position: "center",
        }).showToast();
        return [];
    }
}

