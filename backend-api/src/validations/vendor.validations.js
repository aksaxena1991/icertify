const Joi = require('joi');
const { ObjectId } = require('./custom.validation');

const createVendor = {
  body: Joi.object().keys({
    vendorName: Joi.string().required(),
    
    
  })
};

const getVendors = {
  query: Joi.object().keys({
    vendorName: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  })
};

const getVendor = {
  params: Joi.object().keys({
    vendorId: Joi.string().custom(ObjectId),
  })
};

const updateVendor = {
  params: Joi.object().keys({
    vendorId: Joi.required().custom(ObjectId),
  }),
  body: Joi.object()
    .keys({
        vendorName: Joi.string(),
    })
    .min(1),
};

const deleteVendor = {
  params: Joi.object().keys({
    vendorId: Joi.string().custom(ObjectId),
  })
};

module.exports = {
  createVendor,
  getVendors,
  getVendor,
  updateVendor,
  deleteVendor,
};
