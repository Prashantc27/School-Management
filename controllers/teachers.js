const Teacher = require('../models/teachers');


const createTeacher = async (req, res) => {
  try {
    const { name, subject } = req.body;

    if (!name || !subject) {
      return res.status(400).json({ error: 'TeacherName and Subject are required fields' });
    }

    const newTeacher = new Teacher({
      name,
      subject,
      // Add more fields here as needed
    });

    const savedTeacher = await newTeacher.save();
    const allTeachers = await Teacher.find({});
    res.status(201).render('teachers', { teachers: allTeachers });
  } catch (error) {
    res.status(500).json({ error: 'Error creating teacher' });
  }
};

// const createStudent = async (req, res) => {
//   try {
//     const { RollNo, Name, Age } = req.body;
//     const student = new Student({ RollNo, Name, Age });
//     await student.save();

//     // Fetch the list of all students and send it as JSON
//     const students = await Student.find({});

//     // Send a success response as JSON
//     //res.status(201).json({ message: 'Student saved successfully', students });
//     res.status(200).render('students', { students: students }); // Make sure to pass the students array

//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// Retrieve a list of teachers
const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).render('teachers', { teachers }); // Render a teachers view
  } catch (error) {
    res.status(500).json({ error: 'Error fetching teachers' });
  }
};


// Update a teacher by ID
const updateTeacher = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedTeacher) {
      return res.status(404).json({ error: 'Teacher not found' });
    }

    res.status(200).json(updatedTeacher);
  } catch (error) {
    res.status(500).json({ error: 'Error updating teacher' });
  }
};

// Delete a teacher by ID
const deleteTeacher = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTeacher = await Teacher.findByIdAndRemove(id);

    if (!deletedTeacher) {
      return res.status(404).json({ error: 'Teacher not found' });
    }
    const allTeachers = await Teacher.find({});
    res.status(201).render('teachers', { teachers: allTeachers });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting teacher' });
  }
};

module.exports = {
  createTeacher,
  getTeachers,
  updateTeacher,
  deleteTeacher,
};
