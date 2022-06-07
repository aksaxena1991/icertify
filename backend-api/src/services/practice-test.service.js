const httpStatus = require('http-status');
const { PracticeTestModel } = require('../models');
const ApiError = require('../utils/ApiError');
const _ = require('lodash');
/**
 * Create a practiceTest
 * @param {Object} practiceTestBody
 * @returns {Promise<PracticeTest>}
 */
const createPracticeTest = async (practiceTestBody) => {
    if (_.isEmpty(practiceTestBody)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Unable to create a practice test here!');
      }
      return PracticeTestModel.create(practiceTestBody);
};

/**
 * Query for practiceTest
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryPracticeTests = async (filter, options) => {
  const practiceTest = await PracticeTestModel.paginate(filter, options);
  return practiceTest;
};

/**
 * Get practiceTest by id
 * @param {ObjectId} id
 * @returns {Promise<PracticeTest>}
 */
const getPracticeTestById = async (id) => {
  return PracticeTestModel.findById(id);
};

const getPracticeTestByCourseId = async (id) => {
  return PracticeTestModel.find({courseId:id});
};

/**
 * Update practiceTest by id
 * @param {ObjectId} practiceTestId
 * @param {Object} updateBody
 * @returns {Promise<PracticeTest>}
 */
const updatePracticeTestById = async (practiceTestId, updateBody) => {
  
    const practiceTest = await getPracticeTestById(practiceTestId);
    if (!practiceTest) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Practice Test not found!');
    }
    if (_.isEmpty(updateBody)) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Unable to update anything here!');
    }
    
    const updatedPracticeTest = new PracticeTestModel(Object.assign(practiceTest, updateBody))
    await updatedPracticeTest.save();
    return updatedPracticeTest;
};

/**
 * Delete practiceTest by id
 * @param {ObjectId} practiceTestId
 * @returns {Promise<PracticeTest>}
 */
const deletePracticeTestById = async (practiceTestId) => {
 return PracticeTestModel.findByIdAndDelete({_id:practiceTestId})
};

module.exports = {
  createPracticeTest,
  queryPracticeTests,
  getPracticeTestById,
  updatePracticeTestById,
  deletePracticeTestById,
  getPracticeTestByCourseId
};
