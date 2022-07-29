"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const userObj = { name: "Nithya", "email": "nit@gmail.com", password: "pass123" };
//Step 3: call REST API
const url = "http://localhost:3000/users";
//post,get,patch,delete,put
axios_1.default.post(url, userObj).then((res) => {
    console.log("Response:", res.data);
});
