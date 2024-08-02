# pre-entrega3JS-ortizdiego


Este es un proyecto para el Curso de Javascript donde veremos un ejemplo de una Pre-entrega.

El proyecto es un simulador de E-commerce que tendrá las siguientes características:

- El usuario podrá visualizar una lista de productos y ordenarlos según su precio.
- El usuario podrá buscar y filtrar productos.
- Los productos se podrán agregar a un carrito de compras.
- El usuario podrá visualizar los productos del carrito de compras.
- El usuario podrá eliminar productos del carrito de compras.
- Se le mostrará al usuario la cantidad total y el precio total de productos en el carrito de compras.
- El usuario podrá finalizar la compra.
- El carrito se guarda en el `localStorage` para mantener el estado entre sesiones.
- La interfaz se maneja utilizando el DOM y eventos del usuario.

## Cómo correr el proyecto

1. Ingresar al siguiente link de GitHub Page y utilizar https://dortiz.github.io/pre-entrega3JS-ortizdiego/

## Archivos principales

### `index.html`

Este archivo contiene la estructura básica de la página, incluyendo el contenedor para los productos y el carrito de compras.

### `main.js`

Este archivo contiene la lógica principal de la aplicación, incluyendo las funciones para mostrar productos, agregar productos al carrito, eliminar productos del carrito, y finalizar la compra. También se encarga de manejar el almacenamiento del carrito en `localStorage` y la manipulación del DOM.

### `stock.js`

Este archivo contiene el array de productos disponibles en la tienda. Cada producto tiene propiedades como `id`, `nombre`, `tipo`, `descripcion`, `precio`, y `cantidad`.

## Funcionalidades

### Visualizar productos

Los productos se ordenan según su precio y se muestran en la página principal. Cada producto tiene un botón para agregarlo al carrito de compras.

### Buscar y filtrar productos

El usuario puede buscar productos por nombre y filtrar productos por tipo utilizando las funciones correspondientes.

### Agregar productos al carrito

Al hacer clic en el botón "Agregar al Carrito" de un producto, este se añade al carrito de compras. El estado del carrito se guarda en `localStorage` para mantener la persistencia entre sesiones.

### Visualizar el carrito

El usuario puede ver los productos en su carrito, junto con el precio de cada uno y el total acumulado. Los productos en el carrito se muestran en la sección correspondiente de la página.

### Eliminar productos del carrito

El usuario puede eliminar productos del carrito haciendo clic en el botón "Eliminar" junto a cada producto en el carrito.

### Finalizar la compra

El usuario puede finalizar la compra, lo que muestra un resumen de los productos seleccionados (sin precios individuales, solo el total) y vacía el carrito.

## Uso de JSON y Storage

El carrito de compras se guarda en el `localStorage` del navegador utilizando JSON. Esto permite que el carrito mantenga su estado entre diferentes sesiones del usuario.

## Uso del DOM y eventos del usuario

La aplicación manipula el DOM para mostrar los productos y el carrito de compras. Los eventos del usuario, como hacer clic en los botones para agregar o eliminar productos, se manejan utilizando `addEventListener` para actualizar la interfaz en tiempo real.



