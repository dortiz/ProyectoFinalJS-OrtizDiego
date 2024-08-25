export async function obtenerProductos() {
    try {
        const response = await fetch('../json/products.json');
        if (!response.ok) {
            throw new Error(`Error al obtener productos: ${response.statusText}`);
        }
        const productos = await response.json();
        return productos;
    } catch (error) {
        console.error(error);
        Swal.fire('Error al cargar los productos. Intenta nuevamente más tarde.');
        return [];
    }
}
