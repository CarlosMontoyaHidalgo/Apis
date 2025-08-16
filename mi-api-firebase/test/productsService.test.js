import { addProduct, getAllProducts } from '../services/productsService.js';

describe('Products Service - Unit Tests', () => {
  
  it('debería agregar un producto correctamente', async () => {
    const newProduct = { name: 'Test Product', price: 100};
    const result = await addProduct(newProduct);

    expect(result).toHaveProperty('id');
    expect(result.name).toBe(newProduct.name);
    expect(result.price).toBe(newProduct.price);
  });

  it('debería devolver todos los productos', async () => {
    const products = await getAllProducts();
    expect(Array.isArray(products)).toBe(true);
  });

});
