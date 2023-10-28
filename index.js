const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const path = require("path");
const studentRoutes = require('./routes/students');
const teacherRoutes = require('./routes/teachers');
const marksRoutes = require('./routes/marks');
const { connectToMongoDB } = require('./config/mongoose');
const bodyParser = require('body-parser');

const app = express();
// Add the method-override middleware
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
app.use('/marks', marksRoutes);

const PORT = 3000;
connectToMongoDB('mongodb://127.0.0.1:27017/School-Management')
  .then(() => {
    console.log("Mongodb connected");
    app.listen(PORT, () => {
      console.log("Server started");
    });
  });
