const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { courseDetailsService } = require('../services');

const createCourseDetails = catchAsync(async (req, res) => {
  const courseDetails = await courseDetailsService.createCourseDetails(req.body);
  res.status(httpStatus.CREATED).send(courseDetails);
});

const getCourseDetails = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await courseDetailsService.queryCourseDetails(filter, options);
  res.send(result);
});

const getCourseDetail = catchAsync(async (req, res) => {
  const courseDetails = await courseDetailsService.getCourseDetailsById(req.params.courseDetailsId);
  if (!courseDetails) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course detail not found');
  }
  res.send(courseDetails);
});

const getCourseDetailByCourseId = catchAsync(async (req, res) => {
  const courseDetails = await courseDetailsService.getCourseDetailsByCourseId(req.params.courseId);
  if (!courseDetails) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Course detail not found');
  }
  res.send(courseDetails);
});

const updateCourseDetails = catchAsync(async (req, res) => {
  const courseDetails = await courseDetailsService.updateCourseDetailsById(req.params.courseDetailsId, req.body);
  res.send(courseDetails);
});

const deleteCourseDetails = catchAsync(async (req, res) => {
  await courseDetailsService.deleteCourseDetailsById(req.params.courseDetailsId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createCourseDetails,
  getCourseDetail,
  getCourseDetailByCourseId,
  getCourseDetails,
  updateCourseDetails,
  deleteCourseDetails,
};
