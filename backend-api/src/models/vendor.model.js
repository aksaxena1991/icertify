const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const vendorSchema = mongoose.Schema(
  {
    vendorName: {
      type: String,
      required: true,
      unique:true,
      trim:true
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
vendorSchema.plugin(toJSON);
vendorSchema.plugin(paginate);

vendorSchema.pre('save', async function (next) {
  const vendor = this;
  if (vendor.isModified('vendorName')) {
    next();
  }
  
});

const vendor = mongoose.model('Vendor', vendorSchema);

module.exports = vendor;
