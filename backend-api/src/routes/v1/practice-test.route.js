const express = require('express');
// const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const practiceTestValidation = require('../../validations/practice-test.validation');
const practiceTestController = require('../../controllers/practice-test.controller');
const router = express.Router();
router.route('/').post( validate(practiceTestValidation.createPracticeTest), practiceTestController.createPracticeTest);
router.route('/getPracticeTest').get( validate(practiceTestValidation.getPracticeTests), practiceTestController.getPracticeTests);
router.route('/:practiceTestId').get( validate(practiceTestValidation.getPracticeTest), practiceTestController.getPracticeTest)
router.route('/getPracticeTestByCourseId/:courseId').get( validate(practiceTestValidation.getPracticeTestByCourseId), practiceTestController.getPracticeTestByCourseId)
router.route('/updatePracticeTest/:practiceTestId').put(validate(practiceTestValidation.updatePracticeTest), practiceTestController.updatePracticeTest)
router.route('/deletePracticeTest/:practiceTestId').delete( validate(practiceTestValidation.deletePracticeTest), practiceTestController.deletePracticeTest);

module.exports = router;

