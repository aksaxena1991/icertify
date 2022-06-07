const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const courseDetailsSchema = mongoose.Schema(
  {
    courseId: {
      type: String,
      required: true,
    },
    courseSubTitle: {
      type: String,
      required:true,
      trim:true
    },
    vendorId: {
      type: String,
      required:true
    },
    courseWelcomeNote:{
        required:true,
        trim:false,
        type:String
    },
    courseDescription:{
      required:true,
      trim:false,
      type:String
  },
  knowledgeArea:{
    required:true,
    trim:false,
    type:String
},
courseImage:{
  required:false,
  type:String
}
  },
  
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
courseDetailsSchema.plugin(toJSON);
courseDetailsSchema.plugin(paginate);

courseDetailsSchema.pre('save', async function (next) {
  const courseDetail = this;
  if (courseDetail.isModified('courseId')) {
    next();
  }
  
});

const courseDetails = mongoose.model('CourseDetails', courseDetailsSchema);

module.exports = courseDetails;
