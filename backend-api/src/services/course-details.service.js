const httpStatus = require('http-status');
const { CourseDetailsModel } = require('../models');
const ApiError = require('../utils/ApiError');
const _ = require('lodash');
/**
 * Create a courseDetails
 * @param {Object} courseDetailBody
 * @returns {Promise<CourseDetails>}
 */
const createCourseDetails = async (courseDetailBody) => {
    if (_.isEmpty(courseDetailBody)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Unable to create a course details here!');
      }
      return CourseDetailsModel.create(courseDetailBody);
};

/**
 * Query for courseDetails
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCourseDetails = async (filter, options) => {
  const courseDetails = await CourseDetailsModel.paginate(filter, options);
  return courseDetails;
};

/**
 * Get courseDetails by id
 * @param {ObjectId} id
 * @returns {Promise<CourseDetails>}
 */
const getCourseDetailsById = async (id) => {
  return CourseDetailsModel.findById(id);
};

const getCourseDetailsByCourseId = async (id) => {
  return CourseDetailsModel.findOne({
    courseId:`${id}`
  });
};

/**
 * Update courseDetails by id
 * @param {ObjectId} courseDetailsId
 * @param {Object} updateBody
 * @returns {Promise<CourseDetails>}
 */
const updateCourseDetailsById = async (courseDetailsId, updateBody) => {
    const course = await getCourseById(courseDetailsId);
    if (!course) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Course Details not found!');
    }
    if (_.isEmpty(updateBody)) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Unable to update anything here!');
    }
    
    const updatedCourseDetails = new CourseDetailsModel(Object.assign(course, updateBody))
    await updatedCourseDetails.save();
    return updatedCourseDetails;
};

/**
 * Delete courseDetails by id
 * @param {ObjectId} courseDetailsId
 * @returns {Promise<CourseDetails>}
 */
const deleteCourseDetailsById = async (courseDetailsId) => {
  const courseDetails = await getCourseDetailsById(courseDetailsId);
  if (!courseDetails) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course Details not found');
  }
  await courseDetails.remove();
  return courseDetails;
};

module.exports = {
  createCourseDetails,
  queryCourseDetails,
  getCourseDetailsById,
  getCourseDetailsByCourseId,
  updateCourseDetailsById,
  deleteCourseDetailsById,
};
