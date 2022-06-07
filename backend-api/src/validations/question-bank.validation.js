const Joi = require('joi');
const { ObjectId } = require('./custom.validation');

const createQuestionBank = {
  body: Joi.object().keys({
    courseId: Joi.string().required(),
    practiceTestId: Joi.string().required(),
    questionType: Joi.string(),
    options:Joi.string().required(),
    question:Joi.string().required(),
    rightOption:Joi.string().required(),
    explaination:Joi.string(),
    caseStudyId:Joi.string(),
    questionStatus:Joi.string(),
    exhibit:Joi.string()
  })
};
const allQuestionsByPracticeTestId = {
  query: Joi.object().keys({
    courseId: Joi.string(),
    options:Joi.string(),
    practiceTestId: Joi.string(),
    questionType: Joi.string(),
    question:Joi.string(),
    rightOption:Joi.string(),
    explaination:Joi.string(),
    caseStudyId:Joi.string(),
    questionStatus:Joi.string(),
    exhibit:Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  })
};

const getQuestionBanks = {
  query: Joi.object().keys({
    courseId: Joi.string(),
    options:Joi.string(),
    practiceTestId: Joi.string(),
    questionType: Joi.string(),
    question:Joi.string(),
    rightOption:Joi.string(),
    explaination:Joi.string(),
    caseStudyId:Joi.string(),
    questionStatus:Joi.string(),
    exhibit:Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  })
};

const getQuestionBank = {
  params: Joi.object().keys({
    questionBankId: Joi.string().custom(ObjectId),
  })
};

const updateQuestionBank = {
  params: Joi.object().keys({
    questionBankId: Joi.required().custom(ObjectId),
  }),
  body: Joi.object()
    .keys({
        courseId: Joi.string(),
        practiceTestId: Joi.string(),
        questionType: Joi.string(),
        question:Joi.string(),
        options:Joi.string(),
        rightOption:Joi.string(),
        explaination:Joi.string(),
        caseStudyId:Joi.string(),
        questionStatus:Joi.string(),
        exhibit:Joi.string(),
    })
    .min(1),
};

const deleteQuestionBank = {
  params: Joi.object().keys({
    questionBankId: Joi.string().custom(ObjectId),
  })
};

module.exports = {
  createQuestionBank,
  getQuestionBanks,
  getQuestionBank,
  updateQuestionBank,
  deleteQuestionBank,
  allQuestionsByPracticeTestId
};
