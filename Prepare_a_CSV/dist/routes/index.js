"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const convert_js_1 = __importDefault(require("./api/convert.js"));
const routes = express_1.default.Router();
// define a route handler for the defualt home page
routes.get('/', (req, res) => {
    res.send('Main api routes');
});
routes.use('/convert', convert_js_1.default);
exports.default = routes;
