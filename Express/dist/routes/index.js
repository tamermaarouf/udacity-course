import express from 'express';
import student from './api/student.js';
import teacher from './api/teacher.js';
const routes = express.Router();
// define a route handler for the defualt home page
routes.get('/', (req, res) => {
    res.send('Main api routes');
});
routes.use('/student', student);
routes.use('/teacher', teacher);
export default routes;
