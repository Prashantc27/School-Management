const mongoose = require('mongoose');

const markSchema = new mongoose.Schema({
  studentRollNo: {
    type: Number,
    required: true,
  },
  subjectName: {
    type: String,
    required: true,
  },
  obtainedMarks: {
    type: Number,
    required: true,
  },
  totalMarks: {
    type: Number,
    required: true,
  },
  // //teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
  // studentId: {
  //   type: mongoose.Schema.Types.ObjectId, // Assuming you're storing student references as ObjectIds
  //   ref: 'students', // Replace 'Student' with your actual student model name
  //   required: true,
  // }
});

module.exports = mongoose.model('Mark', markSchema);