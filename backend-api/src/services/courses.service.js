const httpStatus = require('http-status');
const { CoursesModel } = require('../models');
const _ = require('lodash');
const ApiError = require('../utils/ApiError');
const utils = require('../utils/utils');


/**
 * Create a course
 * @param {Object} userBody
 * @returns {Promise<Course>}
 */
const createCourse = async (courseBody) => {
  let body = {...courseBody, slug:utils.slugCreater(courseBody.courseTitle)}
  if (_.isEmpty(body)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Unable to create a course here!');
  }
  return CoursesModel.create(body);
};

/**
 * Query for courses
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCourses = async (filter, options) => {
  const allCourses = await CoursesModel.paginate(filter, options);
  return allCourses;
};

/**
 * Get course by ID
 * @param {ObjectId} ID
 * @returns {Promise<Course>}
 */
const getCourseById = async (ID) => {
  return CoursesModel.findById(ID);
};

const getCourseBySlug = async (slug) => {
  return CoursesModel.findOne({slug:slug});
};

/**
 * Update course by ID
 * @param {ObjectId} courseID
 * @param {Object} updateBody
 * @returns {Promise<Course>}
 */
const updateCourseById = async (courseId, updateBody) => {
  const course = await getCourseById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found!');
  }
  if (_.isEmpty(updateBody)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Unable to update anything here!');
  }
  
  const updatedCourse = new CoursesModel(Object.assign(course, updateBody))
  await updatedCourse.save();
return updatedCourse;
};

/**
 * Delete course by ID
 * @param {ObjectId} courseId
 * @returns {Promise<Course>}
 */
const deleteCourseById = async (courseId) => {
  const course = await getCourseById(courseId);
  if (!course) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course not found');
  }
  await CoursesModel.remove();
  return Courses;
};

module.exports = {
  getCourseBySlug,
    createCourse,
  queryCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
};
