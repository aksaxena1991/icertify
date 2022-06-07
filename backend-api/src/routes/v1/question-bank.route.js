const express = require('express');

const validate = require('../../middlewares/validate');
const questionBankValidation = require('../../validations/question-bank.validation');
const questionBankController = require('../../controllers/question-bank.controller');

const router = express.Router();

router.route('/').post( validate(questionBankValidation.createQuestionBank), questionBankController.createQuestionBank);
  router.route('/getAllQuestions').get( validate(questionBankValidation.getQuestionBanks), questionBankController.getQuestionBanks);

router.route('/:questionBankId').get( validate(questionBankValidation.getQuestionBank), questionBankController.getQuestionBank)
router.route('/allQuestionsByPracticeTestId/:practiceTestId').get(validate(questionBankValidation.allQuestionsByPracticeTestId), questionBankController.allQuestionsByPracticeTestId)
router.route('/updateQuestion/:questionId').put(validate(questionBankValidation.updateQuestionBank), questionBankController.updateQuestionBank)
router.route('/deleteQuestion/:questionBankId').delete( validate(questionBankValidation.deleteQuestionBank), questionBankController.deleteQuestionBank);

module.exports = router;

