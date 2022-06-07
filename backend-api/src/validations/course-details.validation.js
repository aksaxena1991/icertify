const Joi = require('joi');
const { ObjectId } = require('./custom.validation');

const createCourseDetails = {
  body: Joi.object().keys({
    courseId: Joi.string().required(),
    vendorId: Joi.string().required(),
    courseWelcomeNote: Joi.string().required(),
    courseSubTitle: Joi.string().required(),
    courseDescription:Joi.string().required(),
    knowledgeArea:Joi.string(),
    courseImage:Joi.string()
    
  })
};

const getCourseDetails = {
  query: Joi.object().keys({
    courseId: Joi.number(),
    vendorId: Joi.number().integer(),
    courseWelcomeNote: Joi.string(),
    courseSubTitle: Joi.string(),
    courseDescription:Joi.string(),
    knowledgeArea:Joi.string(),
    courseImage:Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  })
};

const getCourseDetail = {
  params: Joi.object().keys({
    courseDetailId: Joi.string().custom(ObjectId),
  })
};
const getCourseDetailByCourseId = {
  params: Joi.object().keys({
    courseId: Joi.string(),
  })
};

const updateCourseDetails = {
  params: Joi.object().keys({
    courseDetailId: Joi.required().custom(ObjectId),
  }),
  body: Joi.object()
    .keys({
        courseId: Joi.number(),
        vendorId: Joi.number().integer(),
        courseWelcomeNote: Joi.string(),
        courseSubTitle: Joi.string(),
        courseDescription:Joi.string(),
        knowledgeArea:Joi.string(),
        courseImage:Joi.string(),
    
    })
    .min(1),
};

const deleteCourseDetails = {
  params: Joi.object().keys({
    courseDetailId: Joi.string().custom(ObjectId),
  })
};

module.exports = {
  createCourseDetails,
  getCourseDetails,
  getCourseDetail,
  getCourseDetailByCourseId,
  updateCourseDetails,
  deleteCourseDetails,
};
