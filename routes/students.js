const express = require('express');
const router = express.Router();
const studentController= require('../controllers/students');

// Define routes for CRUD operations on students
// For example, /students, /students/:id

// Create a new student
router.post('/', studentController.createStudent);
router.get('/', studentController.getStudent);
router.get('/:id', studentController.getOneStudent);

router.put('/:id', studentController.updateStudent);

router.delete('/:id', studentController.deleteStudent);
  
module.exports = router;