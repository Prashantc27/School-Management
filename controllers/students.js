const Student = require('../models/students');

const createStudent = async (req, res) => {
  try {
    const { RollNo, Name, Age } = req.body;
    const student = new Student({ RollNo, Name, Age });
    await student.save();

    // Fetch the list of all students and send it as JSON
    const students = await Student.find({});

    // Send a success response as JSON
    //res.status(201).json({ message: 'Student saved successfully', students });
    res.status(200).render('students', { students: students }); // Make sure to pass the students array

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getStudent = async (req, res) => {
  try {
    const students = await Student.find({});

    // Render an EJS view with the students data in a format that your EJS template can process
    res.status(200).render('students', { students: students }); // Make sure to pass the students array
    //res.status(200).json(students);

  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


const getOneStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching student' });
  }
};

const updateStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: 'Error updating student' });
  }
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedStudent = await Student.findByIdAndRemove(id);

    if (!deletedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }
    const students = await Student.find({});
    res.status(200).render('students', { students: students }); // Make sure to pass the students array
  } catch (error) {
    res.status(500).json({ error: 'Error deleting student' });
  }
};

module.exports = {
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
  getOneStudent,
};
