import express from 'express';
import 'dotenv/config';
import productsRouter from './src/routes/products.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenido a mi API modular con MySQL y .env nativo 🚀');
});

app.use('/products', productsRouter);

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
