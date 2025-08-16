// index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { swaggerDocs } from './swagger.js';
import productsRouter from './routes/products.js';
import { requestLogger } from './config/logger.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(requestLogger);

// Documentación
swaggerDocs(app);

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mi API Firebase</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                min-height: 100vh;
            }
            .container {
                background: rgba(255, 255, 255, 0.1);
                padding: 30px;
                border-radius: 15px;
                backdrop-filter: blur(10px);
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            }
            h1 {
                text-align: center;
                margin-bottom: 30px;
                font-size: 2.5em;
            }
            .endpoints {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 20px;
                margin: 30px 0;
            }
            .endpoint {
                background: rgba(255, 255, 255, 0.2);
                padding: 20px;
                border-radius: 10px;
                text-align: center;
                transition: transform 0.3s;
            }
            .endpoint:hover {
                transform: translateY(-5px);
            }
            .endpoint a {
                color: white;
                text-decoration: none;
                font-weight: bold;
                font-size: 1.1em;
            }
            .endpoint a:hover {
                text-decoration: underline;
            }
            .description {
                margin-top: 10px;
                font-size: 0.9em;
                opacity: 0.8;
            }
            .status {
                text-align: center;
                margin-top: 30px;
                padding: 15px;
                background: rgba(0, 255, 0, 0.2);
                border-radius: 8px;
            }
            .version {
                text-align: center;
                opacity: 0.7;
                margin-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 Mi API Firebase</h1>
            <p style="text-align: center; font-size: 1.2em;">API REST para gestión de productos con Firebase</p>
            
            <div class="endpoints">
                <div class="endpoint">
                    <a href="/products">📦 Productos</a>
                    <div class="description">Ver todos los productos (con paginación y filtros)</div>
                </div>
                
                <div class="endpoint">
                    <a href="/api-docs">📚 Documentación</a>
                    <div class="description">Documentación interactiva con Swagger</div>
                </div>
                
                <div class="endpoint">
                    <a href="/metrics">📊 Métricas</a>
                    <div class="description">Estadísticas del servidor</div>
                </div>
            </div>

            <div class="status">
                ✅ <strong>Estado:</strong> Online y funcionando
            </div>

            <div class="version">
                Versión 1.0.0 | Proyecto de práctica
            </div>
        </div>
    </body>
    </html>
  `);
});

// Rutas
app.use('/products', productsRouter);

const PORT = process.env.PORT || 3000;

// Endpoint de métricas
app.get('/metrics', (req, res) => {
  res.json({
    message: 'API Metrics',
    uptime: process.uptime(),
    timestamp: Date.now(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Solo iniciar el servidor si no estamos en modo test
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
    console.log(`📄 Documentación: http://localhost:${PORT}/api-docs`);
  });
}

export default app;
