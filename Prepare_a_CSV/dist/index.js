"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_js_1 = __importDefault(require("./routes/index.js"));
const index_js_2 = __importDefault(require("./utils/index.js"));
const app = (0, express_1.default)();
const port = 3000;
app.use('/', index_js_1.default);
// start the Express server
app.listen(port, () => {
    console.log(`server started at http//localhost:${port}`);
});
const myNotes = (0, index_js_2.default)();
console.log(myNotes);
