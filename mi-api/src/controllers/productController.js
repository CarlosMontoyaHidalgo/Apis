import pool from '../config/db.js';

export const getAllProducts = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM products');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id) || id <= 0) {
      return res.status(400).json({ mensaje: 'ID inválido' });
    }
    const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ mensaje: 'Producto no encontrado' });
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

import Joi from 'joi';

export const createProduct = async (req, res) => {
  const schema = Joi.object({
    nombre: Joi.string().min(1).max(100).required(),
    precio: Joi.number().min(0).required()
  });

  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).json({ mensaje: error.details[0].message });

  const { nombre, precio } = value;

  try {
    const [result] = await pool.query('INSERT INTO products (nombre, precio) VALUES (?, ?)', [nombre, precio]);
    res.status(201).json({ id: result.insertId, nombre, precio });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

export const updateProduct = async (req, res) => {
  const schema = Joi.object({
    nombre: Joi.string().min(1).max(100),
    precio: Joi.number().min(0)
  });

  const { error, value } = schema.validate(req.body, { allowUnknown: false });
  if (error) return res.status(400).json({ mensaje: error.details[0].message });

  const fields = [];
  const values = [];

  if (value.nombre !== undefined) {
    fields.push('nombre = ?');
    values.push(value.nombre);
  }
  if (value.precio !== undefined) {
    fields.push('precio = ?');
    values.push(value.precio);
  }

  if (fields.length === 0) {
    return res.status(400).json({ mensaje: 'No se proporcionaron campos válidos para actualizar' });
  }

  values.push(req.params.id);

  try {
    const [result] = await pool.query(`UPDATE products SET ${fields.join(', ')} WHERE id = ?`, values);
    if (result.affectedRows === 0) return res.status(404).json({ mensaje: 'Producto no encontrado' });
    res.json({ mensaje: 'Producto actualizado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM products WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ mensaje: 'Producto no encontrado' });
    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};
