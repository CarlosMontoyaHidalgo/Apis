import request from 'supertest';
import app from '../index.js';

describe('Products API - Integration Tests', () => {
  
  // Test básico para verificar que la app funciona
  it('GET /products -> debería responder', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toBeLessThan(500); // Al menos no error 500
  });

  // Solo ejecutar estos tests si Firebase está configurado
  if (process.env.FIREBASE_CONFIG) {
    it('GET /products -> debería devolver lista de productos', async () => {
      const res = await request(app).get('/products');
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });

    it('POST /products -> debería crear un producto', async () => {
      const product = { name: 'Product Test', price: 150};
      const res = await request(app)
        .post('/products')
        .send(product);

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty('id');
      expect(res.body.name).toBe(product.name);
    });
  } else {
    it.skip('Tests de Firebase - FIREBASE_CONFIG no configurado', () => {
      console.log('⚠️  Configura FIREBASE_CONFIG para ejecutar tests completos');
    });
  }
});
