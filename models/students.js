const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    RollNo: {
        type: Number,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Age: {
        type: Number,
        required: true,
    },
    obtainedMarks: {
        type: Number,
        required: false,
    },
    totalMarks: {
        type: Number,
        required: false,
    },
});

module.exports = mongoose.model('Student', studentSchema);