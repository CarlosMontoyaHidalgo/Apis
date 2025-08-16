# API de Productos con Firebase

Una API REST simple para practicar la creación de APIs con Firebase y Node.js.

## 🚀 ¿Qué hace?

Esta API permite gestionar productos con las siguientes propiedades:

- `id`: Identificador único
- `name`: Nombre del producto
- `price`: Precio del producto

## 📋 Requisitos

- Node.js
- Una cuenta de Firebase
- Archivo de credenciales de Firebase

## 🔧 Instalación

1. Clona el proyecto:

```bash
git clone <url-del-repositorio>
cd mi-api-firebase
```

2. Instala dependencias:

```bash
npm install
```

3. Configura Firebase:

   - Coloca tu archivo de credenciales JSON en la raíz del proyecto
   - Asegúrate de que el archivo `config/firebase.js` apunte a tu configuración

4. Ejecuta el servidor:

```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`

## 📖 Documentación Swagger

Una vez que el servidor esté ejecutándose, puedes acceder a la documentación interactiva de la API en:

```
http://localhost:3000/api-docs
```

La documentación incluye:

- ✅ **Esquemas de datos** detallados
- ✅ **Ejemplos de requests/responses**
- ✅ **Prueba directa de endpoints**
- ✅ **Códigos de estado HTTP**

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
  "name": "Laptop",
  "price": 1299.99
}
```

### Obtener todos los productos

```bash
GET http://localhost:3000/products
```

### Obtener un producto específico

```bash
GET http://localhost:3000/products/abc123
```

### Actualizar un producto

```bash
PUT http://localhost:3000/products/abc123
Content-Type: application/json

{
  "name": "Laptop Gaming",
  "price": 1599.99
}
```

### Eliminar un producto

```bash
DELETE http://localhost:3000/products/abc123
```

## 🏗️ Estructura del proyecto

```
mi-api-firebase/
├── config/firebase.js       # Configuración de Firebase
├── routes/products.js       # Rutas de productos
├── services/productsService.js  # Lógica de negocio
├── test/                    # Tests unitarios e integración
├── swagger.js              # Configuración de Swagger
├── index.js                # Archivo principal
└── package.json           # Dependencias
```

## 📦 Tecnologías utilizadas

- **Node.js** - Entorno de ejecución
- **Express** - Framework web
- **Firebase Firestore** - Base de datos NoSQL
- **Firebase Admin SDK** - SDK para servidor
- **Swagger UI** - Documentación interactiva de la API
- **Jest & Supertest** - Testing framework y HTTP assertions

## 🧪 Tests

```bash
npm test                # Ejecutar todos los tests
npm run test:watch     # Ejecutar tests en modo watch
```

### Cobertura de tests:

- ✅ **Tests de integración** - Endpoints de la API
- ✅ **Tests unitarios** - Lógica de servicios
- ✅ **Tests condicionales** - Se adaptan a la configuración de Firebase
- ✅ **5 tests pasando** actualmente

### Estructura de tests:

```
test/
├── productsApi.test.js      # Tests de endpoints
└── productsService.test.js  # Tests de servicios
```

## 🎯 Objetivo

Este es un proyecto de práctica para aprender:

- Creación de APIs REST
- Integración con Firebase
- Operaciones CRUD básicas
- Estructura de proyectos Node.js
- Documentación de APIs con Swagger
- Testing con Jest y Supertest

## 🔧 Notas importantes

- Mantén tu archivo de credenciales de Firebase seguro
- No subas las credenciales a control de versiones (usa el `.gitignore` incluido)
- El archivo `.gitignore` protege automáticamente archivos sensibles como `.env` y credenciales JSON
- Este es un proyecto de práctica, no para producción
