const express = require('express');
const validate = require('../../middlewares/validate');
const vendorValidation = require('../../validations/vendor.validations');
const vendorController = require('../../controllers/vendor.controller');

const router = express.Router();

router.route('/').post( validate(vendorValidation.createVendor), vendorController.createVendor);
router.route('/getVendors').get( validate(vendorValidation.getVendors), vendorController.getVendors);

router.route('/:vendorId').get( validate(vendorValidation.getVendor), vendorController.getVendor)
router.route('/updateVendor/:vendorId').patch(validate(vendorValidation.updateVendor), vendorController.updateVendor)
router.route('/deleteVendor/:vendorId').delete( validate(vendorValidation.deleteVendor), vendorController.deleteVendor);

module.exports = router;

