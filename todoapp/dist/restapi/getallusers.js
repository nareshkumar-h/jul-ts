"use strict";
/**
 * Get all user details
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = "http://localhost:3000/users";
// select 
axios_1.default.get(url).then((res) => {
    const users = res.data;
    console.log("response", users);
});
