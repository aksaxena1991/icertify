const Joi = require('joi');
const { ObjectId } = require('./custom.validation');

const createPracticeTest = {
  body: Joi.object().keys({
    courseId: Joi.string().required(),
    testTitle: Joi.string().required(),
    duration: Joi.number().required(),
    percentage:Joi.number().required(),
    isLive:Joi.boolean(),
    isRandom:Joi.boolean(),
    isPublished:Joi.boolean(),
    testStatus:Joi.string(),
  })
};

const getPracticeTests = {
  query: Joi.object().keys({
    courseId: Joi.string(),
    testTitle: Joi.string(),
    duration: Joi.number(),
    percentage:Joi.number(),
    isLive:Joi.boolean(),
    isRandom:Joi.boolean(),
    isPublished:Joi.boolean(),
    testStatus:Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  })
};

const getPracticeTest = {
  params: Joi.object().keys({
    practiceTestId: Joi.string().custom(ObjectId),
  })
};
const getPracticeTestByCourseId = {
  params: Joi.object().keys({
    courseId: Joi.string(),
  })
};

const updatePracticeTest = {
  params: Joi.object().keys({
    practiceTestId: Joi.required().custom(ObjectId),
  }),
  body: Joi.object()
    .keys({
    courseId: Joi.string(),
    testTitle: Joi.string(),
    isLive:Joi.boolean(),
    duration: Joi.number(),
    testStatus: Joi.string(),
    isPublished:Joi.boolean(),
    percentage:Joi.number(),
    isRandom:Joi.boolean(),
    })
    .min(1),
};

const deletePracticeTest = {
  params: Joi.object().keys({
    practiceTestId: Joi.string().custom(ObjectId),
  })
};

module.exports = {
  createPracticeTest,
  getPracticeTests,
  getPracticeTest,
  updatePracticeTest,
  deletePracticeTest,
  getPracticeTestByCourseId
};
