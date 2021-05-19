/* eslint-disable newline-per-chained-call */
const joi = require('@hapi/joi');
 
// defining a schema to validate product post and put methods.
const schema = {
 register: joi.object({
 
    firstname: joi
 .string()
 .min(3)
 .max(50)
 .required()
 .messages({
 'string.base': 'Register name should be a type of \'text\'',
 'string.empty': 'Register name cannot be an empty field',
 'string.min': 'Register name should have a minimum length of {#limit}. Please enter again!',
 'string.max': 'Register name exceed maximum length of {#limit}. Please enter again!',
 'any.required': 'Register name is a required field',
 }),
 lastname: joi
 .string()
 .min(3)
 .max(50)
 .required()
 .messages({
 'string.base': 'Register name should be a type of \'text\'',
 'string.empty': 'Register name cannot be an empty field',
 'string.min': 'Register name should have a minimum length of {#limit}. Please enter again!',
 'string.max': 'Register name exceed maximum length of {#limit}. Please enter again!',
 'any.required': 'Register name is a required field',
 }),
 email: joi
 .string()
 .min(3)
 .max(50)
 .required()
 .messages({
 'string.base': 'Register name should be a type of \'text\'',
 'string.empty': 'Register name cannot be an empty field',
 'string.min': 'Register name should have a minimum length of {#limit}. Please enter again!',
 'string.max': 'Register name exceed maximum length of {#limit}. Please enter again!',
 'any.required': 'Register name is a required field',
 }),
 password: joi
 .string()
 .min(3)
 .max(50)
 .required()
 .messages({
 'string.base': 'Register name should be a type of \'text\'',
 'string.empty': 'Register name cannot be an empty field',
 'string.min': 'Register name should have a minimum length of {#limit}. Please enter again!',
 'string.max': 'Register name exceed maximum length of {#limit}. Please enter again!',
 'any.required': 'Register name is a required field',
 })
 
 })
};
 
module.exports = schema;