// validators/productValidator.js
import Joi from 'joi';

export const productSchema = Joi.object({
  name: Joi.string().min(1).required().messages({
    'string.empty': 'El nombre no puede estar vacío',
    'any.required': 'El nombre es obligatorio'
  }),
  price: Joi.number().positive().required().messages({
    'number.base': 'El precio debe ser un número',
    'number.positive': 'El precio debe ser mayor que 0',
    'any.required': 'El precio es obligatorio'
  }),
});
