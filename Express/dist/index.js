import express from 'express';
import routes from './routes/index.js';
const app = express();
const port = 3000;
// // define a route handler for the defualt home page
// app.get('/api', (req, res) => {
// 	res.send('hello, World');
// });
app.use('/', routes);
// start the Express server
app.listen(port, () => {
    console.log(`server started at http//localhost:${port}`);
});
