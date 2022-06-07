const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { vendorService } = require('../services');

const createVendor = catchAsync(async (req, res) => {
  const vendor = await vendorService.createVendor(req.body);
  res.status(httpStatus.CREATED).send(vendor);
});

const getVendors = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await vendorService.queryVendor(filter, options);
  res.send(result);
});

const getVendor = catchAsync(async (req, res) => {
  const vendor = await vendorService.getVendorById(req.params.vendorId);
  if (!vendor) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Vendor not found');
  }
  res.send(vendor);
});

const updateVendor = catchAsync(async (req, res) => {
  const vendor = await vendorService.updateVendorById(req.params.vendorId, req.body);
  res.send(vendor);
});

const deleteVendor = catchAsync(async (req, res) => {
  await vendorService.deleteVendorById(req.params.vendorId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createVendor,
  getVendor,
  getVendors,
  updateVendor,
  deleteVendor,
};
