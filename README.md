# School Management System

The Student Management System is a web application for managing student records. It allows users to add, view, update, and delete student information. This project is built using Node.js, Express.js, and MongoDB for the backend, and HTML, CSS, and JavaScript for the frontend.

## Features

- Add new student records with their roll number, name, and age.
- View a list of all the students.
- Update student information.
- Delete student records.
  
# Access the application in your web browser at http://localhost:3000

# Usage

- To add a new student, enter their roll number, name, and age in the input fields and click the "Save" button.
- To view the list of all students, go to the "Student Information" section.
- To update or delete a student record, click the corresponding buttons next to the student's information.
  
# Project Structure
- index.js: The main application file with the Express.js configuration.
- routes/students.js: Defines the routes for managing student records.
- models/students.js: Defines the student schema for MongoDB.
- views/students.ejs: Contains the HTML and EJS templates for rendering student information.
- routes/teachers.js: Defines the routes for managing teacher records.
- models/teachers.js: Defines the teacher schema for MongoDB.
- views/teachers.ejs: Contains the HTML and EJS templates for rendering teacher information.
- routes/marks.js: Defines the routes for managing mark records.
- models/marks.js: Defines the mark schema for MongoDB.
- views/marks.ejs: Contains the HTML and EJS templates for rendering mark information.
