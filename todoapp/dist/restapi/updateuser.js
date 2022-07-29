"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
/**
 * This REST API will call update user api.
 */
const userObj = {
    id: 2,
    name: "Suresh Kumar",
    email: "ss@gmail.com", password: "newpassword"
};
//Step 3: call REST API
const url = "http://localhost:3000/users/" + userObj.id;
//POST => insert , PUT=> update
axios_1.default.put(url, userObj).then((res) => {
    console.log("Response:", res.data);
});
