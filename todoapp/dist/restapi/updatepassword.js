"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
/**
 * This REST API will call changepassword (only password)
 */
const userObj = {
    id: 2,
    password: "pass124"
};
//Step 3: call REST API
const url = "http://localhost:3000/users/" + userObj.id;
//POST => insert , PUT=> update, PATCH => partial update
axios_1.default.patch(url, userObj).then((res) => {
    console.log("Response:", res.data);
});
