"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calculator_1 = require("./Calculator");
const marks = [40, 50, 99, 80]; //input
let noOfSubjects = marks.length; //size of an array : 3 subjects
const calculatorObj = new Calculator_1.Calculator(); //Create an Object
let total = calculatorObj.getTotal(marks); //calling a method 
console.log("Total:" + total);
let percentage = calculatorObj.getPercentage(total, noOfSubjects);
console.log("Percentage:" + percentage);
