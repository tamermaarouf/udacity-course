import { promises } from "fs";


const readData = async () => {
    const myFile = await promises.readFile('./users.csv', 'utf-8');
    console.log(myFile);
}

export default readData;