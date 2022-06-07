const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const practiceTestSchema = mongoose.Schema(
  {
    courseId: {
      type: String,
      required: true,
    },
    testTitle: {
      type: String,
      required:true,
      trim:true
    },
    duration: {
      type: Number,
      required:true
    },
    percentage:{
        required:true,
        trim:false,
        type:String
    },
    isRandom:{
      required:true,
      type:Boolean,
      default:false
  },
  testStatus:{
    default:'UNPUBLISHED',
    type:String,
    enum:['UNPUBLISHED','PUBLISHED'],
    require:false
  },
  isPublished:{
    default:false,
    type:Boolean,
    require:false
  },
  isLive:{
    default:false,
    type:Boolean,
    require:false
  }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
practiceTestSchema.plugin(toJSON);
practiceTestSchema.plugin(paginate);

practiceTestSchema.pre('save', async function (next) {
  const practiceTest = this;
  if (practiceTest.isModified('testTitle')) {
    next();
  }
  
});

const practiceTest = mongoose.model('practiceTest', practiceTestSchema);

module.exports = practiceTest;
