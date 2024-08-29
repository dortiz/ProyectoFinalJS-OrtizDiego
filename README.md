# Tienda Online - Simulador Interactivo

## Descripción

Este proyecto es un simulador interactivo de una tienda online donde los usuarios pueden navegar por una selección de productos, agregar productos a un carrito de compras y finalizar la compra. La aplicación utiliza tecnologías web modernas como HTML, CSS, y JavaScript, además de integrar interacción dinámica con el DOM, manejo de eventos, almacenamiento de datos en `LocalStorage`, y la simulación de una base de datos mediante un archivo `JSON`. Utilizando la biblioteca Toastify para mostrar mensajes de alerta.

## Estructura del Proyecto

- index.html: Archivo principal HTML.
- css/styles.css: Estilos para el proyecto.
- js/api.js: Módulo para obtener productos de una API.
- js/dom.js: Módulo para manipular el DOM y mostrar productos y el carrito.
- js/cart.js: Módulo para manejar el carrito de compras.
- js/stock.js: Módulo para inicializar y cargar productos.
- js/events.js: Módulo para manejar eventos de la aplicación.
- assets/: Carpeta que contiene las imágenes de los productos y el favicon.


## Requisitos

Antes de ejecutar el proyecto, asegúrate de cumplir con los siguientes requisitos:

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Conexión a Internet para cargar el framework Bootstrap

## Uso Online

Ingresar al siguiente link y navergar y utilizar sus funciones libremente. 

https://dortiz.github.io/ProyectoFinalJS-OrtizDiego/

## Instalación

Clonar el Repositorio

1 - Clona el repositorio a tu máquina local usando Git:

git clone https://github.com/tu_usuario/tu_repositorio.git

2 -Instalar Dependencias
No se requieren dependencias externas para este proyecto, pero asegúrate de tener una conexión a Internet para cargar recursos desde CDNs.

3 -Estructura de Archivos

HTML: El archivo index.html contiene la estructura básica de la página.
CSS: Los estilos están definidos en css/styles.css.
JavaScript: Los módulos de JavaScript están en la carpeta js.

4 -Iniciar el Proyecto

Abre el archivo index.html en tu navegador para ver el proyecto en acción. No es necesario configurar un servidor local para este proyecto, pero si deseas hacerlo, puedes usar un servidor local como http-server para Node.js:


npx http-server
Luego, abre http://localhost:8080 en tu navegador para ver la aplicación.

## Uso

1 - Ver Productos

Los productos se muestran en la sección de productos de la página principal. Cada producto tiene un botón para agregarlo al carrito.

2 - Agregar Productos al Carrito

Haz clic en el botón "Agregar al Carrito" para añadir un producto al carrito. El carrito se actualiza automáticamente y muestra los productos agregados.

3 - Eliminar Productos del Carrito

Los productos pueden ser eliminados del carrito usando el botón correspondiente en la vista del carrito.

4 - Finalizar Compra

Haz clic en el botón "Finalizar Compra" para completar el proceso de compra. El carrito se vaciará y se mostrará un mensaje de agradecimiento.


## Tecnologías Utilizadas

- **HTML5**: Estructura de la página web.
- **CSS3**: Estilos y diseño de la interfaz, junto con Bootstrap para un diseño responsivo.
- **JavaScript**: Lógica principal de la aplicación, manipulación del DOM, manejo de eventos y almacenamiento en `LocalStorage`.
- **Bootstrap 4**: Framework CSS para el diseño responsivo.
- **JSON**: Archivo simulado de base de datos para almacenar los productos.
- **Toastify**: Biblioteca para mostrar mensajes de alerta.

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

## Autor

**Diego Ortiz** - Desarrollador Web.

## Licencia

Este proyecto está licenciado bajo los términos de la [Licencia MIT](https://opensource.org/licenses/MIT).