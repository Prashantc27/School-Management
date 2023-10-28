const Marks = require('../models/marks');

// const createMark = async (req, res) => {
//     try {
//         const { studentRollNo, subjectName, obtainedMarks, totalMarks } = req.body;
//         const Mark = new Mark({ studentRollNo, subjectName, obtainedMarks, totalMarks });
//         await Mark.save();

//         // Fetch the list of all Marks and send it as JSON
//         const allMarks = await Marks.find({});

//         // Send a success response as JSON
//         //res.status(201).json({ message: 'Mark saved successfully', Marks });
//         res.status(200).render('Marks', { Marks: allMarks }); // Make sure to pass the Marks array

//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// };

