import express from 'express';
import routes from './routes/index.js';
import readData from './utils/index.js';

const app = express();
const port = 3000;

app.use('/', routes);

// start the Express server
app.listen(port, () => {
	console.log(`server started at http//localhost:${port}`);
});

const myNotes = readData();

console.log(myNotes);