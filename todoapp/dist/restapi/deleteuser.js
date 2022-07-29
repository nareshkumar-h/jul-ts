"use strict";
/**
 * Delete the user for the given id
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const id = 1;
const url = "http://localhost:3000/users/" + id;
axios_1.default.delete(url).then((res) => {
    console.log("Deleted :", res.data);
});
