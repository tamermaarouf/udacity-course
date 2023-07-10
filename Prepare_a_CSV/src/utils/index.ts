import { promises } from "fs";
const csvtojsonV2 = require("csvtojson/v2");


const readData = async () => {
    const myFile = await promises.readFile('./users.csv', 'utf-8');
    console.log(myFile);
    csvtojsonV2()
        .fromFile(myFile)
        .then((jsonObj: any) => {
            console.log(jsonObj);
            /**
             * [
             * 	{a:"1", b:"2", c:"3"},
             * 	{a:"4", b:"5". c:"6"}
             * ]
             */
        })

}




export default readData;