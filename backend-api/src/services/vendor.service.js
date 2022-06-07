const httpStatus = require('http-status');
const { VendorModel } = require('../models');
const _ = require('lodash');
const ApiError = require('../utils/ApiError');

/**
 * Create a vendor
 * @param {Object} vendorBody
 * @returns {Promise<Vendor>}
 */
const createVendor = async (vendorBody) => {
  if (_.isEmpty(vendorBody)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Unable to create a vendor here!');
  }
  return VendorModel.create(vendorBody);
};

/**
 * Query for vendor
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryVendor = async (filter, options) => {
  const allVendors = await VendorModel.paginate(filter, options);
  return allVendors;
};

/**
 * Get vendor by ID
 * @param {ObjectId} ID
 * @returns {Promise<Vendor>}
 */
const getVendorById = async (ID) => {
  return VendorModel.findById(ID);
};

/**
 * Update vendor by ID
 * @param {ObjectId} vendorID
 * @param {Object} updateBody
 * @returns {Promise<Vendor>}
 */
const updateVendorById = async (vendorId, updateBody) => {
  const vendor = await getVendorById(vendorId);
  if (!vendor) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Vendor not found!');
  }
  if (_.isEmpty(updateBody)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Unable to update anything here!');
  }
  
  const updatedVendor = new VendorModel(Object.assign(vendor, updateBody))
  await updatedVendorModel.save();
  return updatedVendor;
};

/**
 * Delete vendor by ID
 * @param {ObjectId} vendorId
 * @returns {Promise<Vendor>}
 */
const deleteVendorById = async (vendorId) => {
  const vendor = await getVendorById(vendorId);
  if (!vendor) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Vendor not found');
  }
const deleteVendor = new VendorModel(vendor);
  await deleteVendor.remove();
  return deleteVendor;
};

module.exports = {
    createVendor,
  queryVendor,
  getVendorById,
  updateVendorById,
  deleteVendorById,
};
