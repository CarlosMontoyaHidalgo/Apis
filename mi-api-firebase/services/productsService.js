import { db } from '../config/firebase.js';

const productsCollection = db.collection('products');

export const getAllProducts = async () => {
  const snapshot = await productsCollection.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addProduct = async (productData) => {
  const docRef = await productsCollection.add(productData);
  return { id: docRef.id, ...productData };
};

export const getProductById = async (id) => {
  const doc = await productsCollection.doc(id).get();
  if (!doc.exists) throw new Error('Producto no encontrado');
  return { id: doc.id, ...doc.data() };
};

export const updateProduct = async (id, productData) => {
  await productsCollection.doc(id).update(productData);
  return { id, ...productData };
};

export const deleteProduct = async (id) => {
  await productsCollection.doc(id).delete();
  return { message: 'Producto eliminado correctamente' };
};
