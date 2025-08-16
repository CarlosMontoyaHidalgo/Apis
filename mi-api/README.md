# API de Productos con MySQL

Una API REST simple para practicar la creación de APIs con MySQL y Node.js.

## 🚀 ¿Qué hace?

Esta API permite gestionar productos con las siguientes propiedades:

- `id`: Identificador único
- `nombre`: Nombre del producto
- `precio`: Precio del producto

## 📋 Requisitos

- Node.js
- MySQL instalado y funcionando
- Crear una base de datos MySQL

## 🔧 Instalación

1. Clona el proyecto:

```bash
git clone <url-del-repositorio>
cd mi-api
```

2. Instala dependencias:

```bash
npm install
```

3. Configura la base de datos:

   - Crea un archivo `.env` con tu configuración de MySQL:

   ```
   DB_HOST=localhost
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_NAME=tu_base_de_datos
   PORT=3000
   ```

4. Crea la tabla de productos en MySQL:

```sql
CREATE DATABASE IF NOT EXISTS tu_base_de_datos;
USE tu_base_de_datos;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  precio DECIMAL(10, 2) NOT NULL
);
```

5. Ejecuta el servidor:

```bash
node server.js
```

El servidor estará disponible en `http://localhost:3000`

## 📚 Endpoints

| Método | URL             | Descripción                 |
| ------ | --------------- | --------------------------- |
| GET    | `/products`     | Obtener todos los productos |
| POST   | `/products`     | Crear un nuevo producto     |
| GET    | `/products/:id` | Obtener un producto por ID  |
| PUT    | `/products/:id` | Actualizar un producto      |
| DELETE | `/products/:id` | Eliminar un producto        |

## 📝 Ejemplos de uso

### Crear un producto

```bash
POST http://localhost:3000/products
Content-Type: application/json

{
  "nombre": "Laptop",
  "precio": "1299.99"
}
```

### Obtener todos los productos

```bash
GET http://localhost:3000/products
```

Respuesta:

```json
[
  {
    "id": 1,
    "nombre": "Laptop",
    "precio": "1200.00"
  },
  {
    "id": 2,
    "nombre": "Mouse",
    "precio": "25.00"
  }
]
```

### Obtener un producto específico

```bash
GET http://localhost:3000/products/1
```

### Actualizar un producto

```bash
PUT http://localhost:3000/products/1
Content-Type: application/json

{
  "nombre": "Laptop Gaming",
  "precio": "1599.99"
}
```

### Eliminar un producto

```bash
DELETE http://localhost:3000/products/1
```

## 🏗️ Estructura del proyecto

```
mi-api/
├── src/
│   ├── config/db.js             # Configuración de MySQL
│   ├── controllers/productController.js  # Controladores
│   └── routes/products.js       # Rutas de productos
├── server.js                    # Archivo principal
├── package.json                 # Dependencias
└── .env                         # Variables de entorno
```

## 📦 Tecnologías utilizadas

- **Node.js** - Entorno de ejecución
- **Express** - Framework web
- **MySQL2** - Driver para MySQL
- **dotenv** - Manejo de variables de entorno

## 🎯 Objetivo

Este es un proyecto de práctica para aprender:

- Creación de APIs REST
- Integración con bases de datos MySQL
- Operaciones CRUD básicas
- Estructura modular de proyectos Node.js
- Uso de variables de entorno

## 🔧 Notas importantes

- Asegúrate de tener MySQL instalado y funcionando
- Configura correctamente las variables de entorno en `.env`
- No subas el archivo `.env` a control de versiones
- Este es un proyecto de práctica, no para producción
