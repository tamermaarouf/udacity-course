import express from 'express';
import convert from './api/convert.js';
const routes = express.Router();

// define a route handler for the defualt home page
routes.get('/', (req, res) => {
	res.send('Main api routes');
});
routes.use('/convert', convert);

export default routes;
