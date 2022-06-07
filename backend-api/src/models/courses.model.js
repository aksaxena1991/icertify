const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const coursesSchema = mongoose.Schema(
  {
    courseTitle: {
      type: String,
      required: true,
      trim: true,
      unique:true
    },
    slug:{
      type:String,
      trim:true,
      unique:true
    },
    vendorId: {
      type: String,
      required:true
    },
    isPublished:{
        required:false,
        default:false,
        type:Boolean
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
coursesSchema.plugin(toJSON);
coursesSchema.plugin(paginate);

coursesSchema.pre('save', async function (next) {
  const course = this;
  if (course.isModified('courseTitle') || course.isModified('courseId')) {
    next();
  }
  
});

const Courses = mongoose.model('Courses', coursesSchema);

module.exports = Courses;
