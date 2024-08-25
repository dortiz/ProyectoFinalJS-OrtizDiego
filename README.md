# Tienda Online - Simulador Interactivo

## Descripción

Este proyecto es un simulador interactivo de una tienda online donde los usuarios pueden navegar por una selección de productos, agregar productos a un carrito de compras y finalizar la compra. La aplicación utiliza tecnologías web modernas como HTML, CSS, y JavaScript, además de integrar interacción dinámica con el DOM, manejo de eventos, almacenamiento de datos en `LocalStorage`, y la simulación de una base de datos mediante un archivo `JSON`.

## Estructura del Proyecto

│── /css
│ └── styles.css # Hoja de estilo principal
│── /js
│ ├── main.js # Lógica principal del simulador
│ ├── stock.js # Datos de productos
│ └── events.js # Manejador de eventos del DOM
│── /json
│ └── products.json # Base de datos simulada
├── /assets
│ └── logo.png # Imágenes y otros recursos multimedia
├── index.html # Documento HTML principal
├── README.md # Instrucciones de uso y detalles del proyecto


## Requisitos

Antes de ejecutar el proyecto, asegúrate de cumplir con los siguientes requisitos:

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Conexión a Internet para cargar el framework Bootstrap

## Instalación

No se requiere una instalación compleja. Simplemente sigue estos pasos:

1. Descarga o clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web favorito.

## Uso

### Navegación y selección de productos

1. Al cargar la página, se mostrarán los productos disponibles en forma de tarjetas (cards).
2. Cada tarjeta contiene el nombre del producto, una breve descripción, el precio, y un botón "Agregar al Carrito".
3. Haz clic en el botón "Agregar al Carrito" para seleccionar un producto. Se añadirá automáticamente al carrito, almacenado en `LocalStorage`.

### Visualización del carrito de compras

- Los productos seleccionados se mostrarán en la sección "Carrito de Compras", ubicada en la parte inferior de la página.
- El carrito muestra el nombre de los productos seleccionados y el total acumulado de la compra.

### Finalización de la compra

- Haz clic en el botón "Finalizar Compra" para completar el proceso. El total de la compra se mostrará y el carrito se vaciará.
- Al finalizar la compra, los datos del carrito se eliminan del `LocalStorage`.

## Tecnologías Utilizadas

- **HTML5**: Estructura de la página web.
- **CSS3**: Estilos y diseño de la interfaz, junto con Bootstrap para un diseño responsivo.
- **JavaScript**: Lógica principal de la aplicación, manipulación del DOM, manejo de eventos y almacenamiento en `LocalStorage`.
- **Bootstrap 4**: Framework CSS para el diseño responsivo.
- **JSON**: Archivo simulado de base de datos para almacenar los productos.

## Funcionalidades Clave

1. **Interacción Dinámica con el DOM**: Todos los productos se generan dinámicamente en la página utilizando JavaScript.
2. **Eventos y Manejo del Carrito**: El manejo del carrito de compras se realiza a través de eventos del DOM, con datos almacenados en `LocalStorage` para persistencia.
3. **Uso de JSON**: Los productos se cargan desde un archivo JSON simulado, lo que permite modificar y actualizar fácilmente el catálogo de la tienda.
4. **Responsive Design**: Gracias a Bootstrap, la aplicación es completamente responsiva y se adapta a diferentes tamaños de pantalla.

## Notas de Desarrollo

- El proyecto está organizado para facilitar su mantenimiento y escalabilidad.
- Las funciones esenciales están modularizadas en diferentes archivos JS para separar responsabilidades y mejorar la legibilidad del código.
- Se utilizó `LocalStorage` para mantener el carrito de compras persistente incluso si el usuario recarga la página.

## Posibles Mejoras

- **Integración con una API real**: Se puede conectar el simulador a una API para manejar productos dinámicos en tiempo real.
- **Autenticación de Usuarios**: Se podría agregar una capa de autenticación para permitir a los usuarios iniciar sesión y guardar sus compras.
- **Métodos de Pago**: Integrar un simulador de métodos de pago para completar la experiencia de compra.

## Guía de Uso

1. Clona el repositorio: `git clone https://github.com/dortiz/ProyectoFinalJS-OrtizDiego`
2. Navega a la carpeta del proyecto: `cd ProyectoFinalJS-OrtizDiego`
3. Abre `index.html` en un navegador web para iniciar la aplicación.

## Autor

**Diego Ortiz** - Desarrollador Web.

## Licencia

Este proyecto está licenciado bajo los términos de la [Licencia MIT](https://opensource.org/licenses/MIT).