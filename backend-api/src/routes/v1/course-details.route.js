const express = require('express');

const validate = require('../../middlewares/validate');
const courseDetailsValidation = require('../../validations/course-details.validation');
const courseDetailsController = require('../../controllers/course-details.controller');

const router = express.Router();

router.route('/').post( validate(courseDetailsValidation.createCourseDetails), courseDetailsController.createCourseDetails);
  router.route('/getCourseDetails').get( validate(courseDetailsValidation.getCourseDetails), courseDetailsController.getCourseDetails);

router.route('/:courseDetailId').get( validate(courseDetailsValidation.getCourseDetail), courseDetailsController.getCourseDetail)
router.route('/getCourseDetailByCourseId/:courseId').get( validate(courseDetailsValidation.getCourseDetailByCourseId), courseDetailsController.getCourseDetailByCourseId)
router.route('/updateCourseDetail/:courseDetailId').put(validate(courseDetailsValidation.updateCourseDetails), courseDetailsController.updateCourseDetails)
router.route('/deleteCourseDetail/:courseDetailId').delete( validate(courseDetailsValidation.deleteCourseDetails), courseDetailsController.deleteCourseDetails);

module.exports = router;

