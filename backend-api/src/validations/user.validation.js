const Joi = require('joi');
const { password, ObjectId } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('user', 'admin'),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(ObjectId),
  }),
};
const getUserByEmail = {
  params: Joi.object().keys({
    email: Joi.string(),
    password:Joi.string()
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(ObjectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(ObjectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  getUserByEmail,
  updateUser,
  deleteUser,
};
