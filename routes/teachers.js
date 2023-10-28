const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teachers');

// Create a new teacher
router.post('/', teacherController.createTeacher);

// Retrieve a list of teachers
router.get('/', teacherController.getTeachers);

// Update a teacher
router.put('/:id', teacherController.updateTeacher);

// Delete a teacher
router.delete('/:id', teacherController.deleteTeacher);

module.exports = router;
