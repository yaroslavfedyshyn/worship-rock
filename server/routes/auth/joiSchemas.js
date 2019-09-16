const Joi = require('@hapi/joi');

const registerSchema = Joi.object({
    firstName: Joi.string().min(6).max(30).required(),
    lastName: Joi.string().min(6).max(30).required(),
    password: Joi.string().min(8).max(30).regex(/[a-zA-Z0-9]{3,30}/).required(),
    email: Joi.string().email().required()
});

module.exports = {
    registerSchema
};