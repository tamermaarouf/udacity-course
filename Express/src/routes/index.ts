import express from 'express';
const routes = express.Router();

// define a route handler for the defualt home page
routes.get('/', (req, res) => {
	res.send('Connection Work');
});

export default routes;

