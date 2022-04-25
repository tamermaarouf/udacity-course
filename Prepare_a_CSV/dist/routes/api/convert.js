import express from "express";
const convert = express.Router();
convert.get('/', (req, res) => {
    res.send('convert routes');
});
export default convert;
