import express from "express";
const teacher = express.Router();

teacher.get('/', (req, res) => {
    res.send('teacher routes');
});

export default teacher;