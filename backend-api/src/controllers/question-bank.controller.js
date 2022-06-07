const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { questionBankService } = require('../services');

const createQuestionBank = catchAsync(async (req, res) => {
  const questionBank = await questionBankService.createQuestionBank(req.body);
  res.status(httpStatus.CREATED).send(questionBank);
});

const getQuestionBanks = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await questionBankService.queryQuestionBanks(filter, options);
  res.send(result);
});

const allQuestionsByPracticeTestId = catchAsync(async (req, res) => {
  
  const result = await questionBankService.allQuestionsByPracticeTestId(req.params.practiceTestId);
  res.send(result);
});

// allQuestionsByPracticeTestId

const getQuestionBank = catchAsync(async (req, res) => {
  const questionBank = await questionBankService.getQuestionBankById(req.params.questionBankId);
  if (!questionBank) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Question not found');
  }
  res.send(questionBank);
});

const updateQuestionBank = catchAsync(async (req, res) => {
  const questionBank = await questionBankService.updateQuestionBankById(req.params.questionBankId, req.body);
  res.send(questionBank);
});

const deleteQuestionBank = catchAsync(async (req, res) => {
  await questionBankService.deleteQuestionBankById(req.params.questionBankId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createQuestionBank,
  getQuestionBank,
  getQuestionBanks,
  updateQuestionBank,
  deleteQuestionBank,
  allQuestionsByPracticeTestId
};
