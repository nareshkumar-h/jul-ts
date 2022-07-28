"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// If the mark is above 80, PASS 
// if it is less than 80, FAIL
const mark = 95;
let result;
if (mark >= 80) {
    // console.log("PASS");
    result = "PASS";
}
else {
    // console.log("FAIL");
    result = "FAIL";
}
console.log("Result:" + result);
// Task: Calculate Grade
// >90=A
//80-90=>B
//less than 80 =F
