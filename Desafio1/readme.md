# Gestor de Productos

Este es un gestor de productos simple construido en JavaScript que permite agregar, mostrar y buscar productos por ID.

## Funcionalidades

- Agregar productos con título, descripción, precio, imagen, código y stock.
- Mostrar todos los productos almacenados.
- Buscar un producto por su ID.

## Uso

1. **Instalación:**
   - No se requiere instalación de ninguna dependencia externa.

2. **Configuración:**
   - No se necesita ninguna configuración especial.

3. **Ejecución:**
   - Ejecuta el archivo `app.js` para probar el gestor de productos.

4. **Cómo usar:**
   - Utiliza el método `addProduct` para agregar nuevos productos proporcionando los detalles requeridos.
   - Utiliza el método `getProducts` para mostrar todos los productos almacenados.
   - Utiliza el método `getProductById` para buscar un producto por su ID.

## Ejemplo de Uso

```javascript
const manager = new ProductManager();

// Agregar productos
manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc122", 25);

// Mostrar todos los productos
console.log("Productos:", manager.getProducts());

// Buscar productos por ID
console.log("Producto con ID 1:", manager.getProductById(1));
console.log("Producto con ID 3:", manager.getProductById(3));