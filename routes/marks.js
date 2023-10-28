const express = require('express');
const router = express.Router();
const Mark = require('../models/marks');
const Student = require('../models/students');
const axios = require('axios');

//vm21

//vm21

// Create a new set of marks
router.post('/upload', async (req, res) => {
  try {
    const { studentRollNo, subjectName, obtainedMarks, totalMarks } = req.body;
    const mark = new Mark({ studentRollNo, subjectName, obtainedMarks, totalMarks });
    await mark.save();
    // const response = await axios.post('http://localhost:3000/marks/load', {
    //   studentRollNo: studentRollNo, // Pass the studentRollNo
    // });

    // Now you can use the response from /marks/load as needed
    // console.log(JSON.stringify(response));
    const studentData = {};
    res.status(200).render('marks', { studentData: studentData });



  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.post('/load', async (req, res) => {
  try {
    console.log('coming');
    const students = await Student.find({});
    console.log(JSON.stringify(students));
    const { studentRollNo } = req.body;
    const selectedStudent = students.find(student => student.RollNo == studentRollNo);

    const selectedMarksArray = await Mark.find({ studentRollNo: studentRollNo }).exec();
    let obtainedTotalMarks = 0;
    let totalTotalMarks = 0;

    if (selectedMarksArray) {
      selectedMarksArray.forEach((mark) => {
        obtainedTotalMarks += mark.obtainedMarks;
        totalTotalMarks += mark.totalMarks;
      });

    }

    console.log('Obtained Total Marks:', obtainedTotalMarks);
    console.log('Total Total Marks:', totalTotalMarks);

    //console.log(JSON.stringify(selectedMarksArray));
    let studentData = {
      RollNo: null,
      Name: null,
      Age: null,
      obtainedTotalMarks: null,
      totalTotalMarks: null,
    }
    if (selectedStudent) {
      studentData = {
        RollNo: selectedStudent.RollNo || '',
        Name: selectedStudent.Name || '',
        Age: selectedStudent.Age || '',
        obtainedTotalMarks: obtainedTotalMarks || 0,
        totalTotalMarks: totalTotalMarks || 0,
        selectedMarks: selectedMarksArray || '',
      };
    }
    res.status(200).render('marks', { studentData: studentData }); // Make sure to pass the Marks array


  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating marks' });
  }
});


// Retrieve a list of marks
router.get('/', async (req, res) => {
  try {
    const studentData = {};
    const marks = await Mark.find();
    res.status(200).render('marks', { studentData: studentData });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching marks' });
  }
});



// Update marks by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const updatedMarks = await Mark.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedMarks) {
      return res.status(404).json({ error: 'Marks not found' });
    }

    res.status(200).json(updatedMarks);
  } catch (error) {
    res.status(500).json({ error: 'Error updating marks' });
  }
});

// Delete marks by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMark = await Mark.findByIdAndRemove(id);

    if (!deletedMark) {
      return res.status(404).json({ error: 'Mark not found' });
    }
    const studentData = {};
    res.status(200).render('marks', { studentData: studentData });

  } catch (error) {
    res.status(500).json({ error: 'Error deleting student' });
  }
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const marks = await Mark.findOne({ _id: id }).populate('teacherId', 'name').exec();

    if (!mark) {
      return res.status(404).json({ error: 'Marks not found' });
    }

    res.status(200).json(mark);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching marks' });
  }
});




module.exports = router;