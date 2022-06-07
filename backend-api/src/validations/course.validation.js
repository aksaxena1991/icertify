const Joi = require('joi');
const { ObjectId } = require('./custom.validation');

const createCourse = {
  body: Joi.object().keys({
    courseTitle: Joi.string().required(),
    vendorId: Joi.string().required(),
    isPublished: Joi.boolean(),
    slug:Joi.string()
  })
};

const getCourses = {
  query: Joi.object().keys({
    courseTitle: Joi.string(),
    vendorId: Joi.string(),
    isPublished: Joi.boolean(),
    slug:Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  })
};

const getCourse = {
  params: Joi.object().keys({
    courseId: Joi.string().custom(ObjectId),
  })
};
const getCourseBySlug = {
  params: Joi.object().keys({
    slug: Joi.string(),
  })
};

const updateCourse = {
  params: Joi.object().keys({
    courseId: Joi.required().custom(ObjectId),
  }),
  body: Joi.object()
    .keys({
      courseTitle: Joi.string(),
    vendorId: Joi.string(),
    isPublished: Joi.boolean(),
    slug:Joi.string()
    
    })
    .min(1),
};

const deleteCourse = {
  params: Joi.object().keys({
    courseId: Joi.string().custom(ObjectId),
  })
};

module.exports = {
  createCourse,
  getCourses,
  getCourse,
  getCourseBySlug,
  updateCourse,
  deleteCourse,
};
