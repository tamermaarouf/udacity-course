import express from 'express';
import logger from './utils/logger.js';

const app = express();
const port = 3000;


app.get('/', logger, (req, res) => {
	res.send('This is the home Page');
});

app.get('/about', logger, (req, res) => {
	res.send('This is the about Page');
});

app.get('/ContactUs', logger, (req, res) => {
	res.send('This is the Contact us Page');
});

// start the Express server
app.listen(port, () => {
	console.log(`server started at http//localhost:${port}`);
});