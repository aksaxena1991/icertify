const httpStatus = require('http-status');
const { QuestionBankModel } = require('../models');
const _ = require('lodash');
const ApiError = require('../utils/ApiError');

/**
 * Create a questionBank
 * @param {Object} userBody
 * @returns {Promise<QuestionBankModel>}
 */
const createQuestionBank = async (questionBankBody) => {
  if (_.isEmpty(questionBankBody)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Unable to create a question here!');
  }
  return QuestionBankModel.create(questionBankBody);
};

/**
 * Query for questionBanks
 * @param {Object} filter - Mongo filter
 * @param {Object} questionBanks - Query questionBanks
 * @param {string} [questionBanks.sortBy] - Sort questionBank in the format: sortField:(desc|asc)
 * @param {number} [questionBanks.limit] - Maximum number of results per page (default = 10)
 * @param {number} [questionBanks.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryQuestionBanks = async (filter, options) => {
  const allQuestionBanks = await QuestionBankModel.paginate(filter, options);
  return allQuestionBanks;
};


const allQuestionsByPracticeTestId = async (id) => {
  
  const allQuestionBanks = await QuestionBankModel.find({practiceTestId:id});
  return allQuestionBanks;
};
 
/**
 * Get questionBank by ID
 * @param {ObjectId} ID
 * @returns {Promise<QuestionBankModel>}
 */
const getQuestionBankById = async (ID) => {
  return QuestionBankModel.findOne({_id:ID});
};

/**
 * Update questionBank by ID
 * @param {ObjectId} questionBankId
 * @param {Object} updateBody
 * @returns {Promise<QuestionBankModel>}
 */
const updateQuestionBankById = async (questionBankId, updateBody) => {
  const questionBank = await getQuestionBankById(questionBankId);
  if (!questionBank) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Question not found!');
  }
  if (_.isEmpty(updateBody)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Unable to update anything here!');
  }
  
  const updatedQuestionBank = new QuestionBankModel(Object.assign(questionBank, updateBody))
  await updatedQuestionBank.save();
  return updatedQuestionBank;
};

/**
 * Delete questionBank by ID
 * @param {ObjectId} questionBankId
 * @returns {Promise<QuestionBankModel>}
 */
const deleteQuestionBankById = async (questionBankId) => {
  await QuestionBankModel.findOneAndDelete({_id:questionBankId});
  return QuestionBankModel;
};

module.exports = {
    createQuestionBank,
  queryQuestionBanks,
  getQuestionBankById,
  updateQuestionBankById,
  deleteQuestionBankById,
  allQuestionsByPracticeTestId
};
