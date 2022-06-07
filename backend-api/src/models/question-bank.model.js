const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const QuestionBankSchema = mongoose.Schema(
  {
    courseId: {
      type: String,
      required: true,
    },
    options:{
      type:String,
      required:true
    },
    practiceTestId: {
        type: String,
        required: true,
    },
    questionType: {
      type: String,
      enum:['CHOICE','SELECT'],
      required:false
    },
    question:{
        required:true,
        trim:true,
        type:String
    },
    rightOption:{
      required:true,
      trim:true,
      type:String
  },
  explaination:{
    required:false,
    trim:true,
    type:String
},
caseStudyId:{
  required:false,
  type:String
},
questionStatus:{
    default:'UNPUBLISHED',
    type:String,
    enum:['UNPUBLISHED','PUBLISHED'],
    require:false
  },
  exhibit:{
      type:String,
      required:false,
      trim:false
  }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
QuestionBankSchema.plugin(toJSON);
QuestionBankSchema.plugin(paginate);

QuestionBankSchema.pre('save', async function (next) {
  const courseDetail = this;
  if (courseDetail.isModified('questionBankId')) {
    next();
  }
  
});

const QuestionBank = mongoose.model('QuestionBank', QuestionBankSchema);

module.exports = QuestionBank;
