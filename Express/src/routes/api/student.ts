import express from "express";
const student = express.Router();

student.get('/', (req, res) => {
    res.send('student routes');
});

export default student;