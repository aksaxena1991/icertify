const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { practiceTestService } = require('../services');

const createPracticeTest = catchAsync(async (req, res) => {
  const practiceTest = await practiceTestService.createPracticeTest(req.body);
  res.status(httpStatus.CREATED).send(practiceTest);
});

const getPracticeTests = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await practiceTestService.queryPracticeTests(filter, options);
  res.send(result);
});

const getPracticeTest = catchAsync(async (req, res) => {
  const practiceTest = await practiceTestService.getPracticeTestById(req.params.practiceTestId);
  if (!practiceTest) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Practice Test not found');
  }
  res.send(practiceTest);
});

const getPracticeTestByCourseId = catchAsync(async (req, res) => {
  const practiceTest = await practiceTestService.getPracticeTestByCourseId(req.params.courseId);
  if (!practiceTest) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Practice Test not found');
  }
  res.send(practiceTest);
});

const updatePracticeTest = catchAsync(async (req, res) => {
  const practiceTest = await practiceTestService.updatePracticeTestById(req.params.practiceTestId, req.body);
  res.send(practiceTest);
});

const deletePracticeTest = catchAsync(async (req, res) => {
  await practiceTestService.deletePracticeTestById(req.params.practiceTestId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createPracticeTest,
  getPracticeTest,
  getPracticeTests,
  updatePracticeTest,
  deletePracticeTest,
  getPracticeTestByCourseId
};
