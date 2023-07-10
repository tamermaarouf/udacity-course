import express from 'express';
import multer from "multer";
import images from './api/images.js';
import sharp from 'sharp'
const routes = express.Router();


const upload = multer({ dest: '../assets/full' });


routes.get('/', upload.single('fjord.jpg'), (req, res) => {
   if (!req.file) {
     console.log("No file received");
     return res.send(upload.single('fjord.jpg'));
   } else {
     console.log('file received');
     return res.send({
       success: true
     })
   }
 });

// define a route handler for the defualt home page
routes.get('/', (req, res) => {
	res.send('Main api routes');
});
routes.use('/images', images);

export default routes;

