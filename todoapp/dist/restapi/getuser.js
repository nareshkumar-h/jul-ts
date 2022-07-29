"use strict";
/**
 * Get user details for the given id
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const id = 2;
const url = "http://localhost:3000/users/" + id;
//select * from table where id = 1; // return 1 row
axios_1.default.get(url).then((res) => {
    const user = res.data;
    console.log(user);
});
