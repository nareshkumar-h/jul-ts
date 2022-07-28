"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calculator_1 = require("./Calculator");
const calculatorObj = new Calculator_1.Calculator(); //Create an Object
const marks = [40, 50, 99, 80]; //input
let total = calculatorObj.getTotal(marks); //calling a method 
console.log("Total:" + total);
let noOfSubjects = marks.length; //size of an array : 3 subjects
let percentage = calculatorObj.getPercentage(total, noOfSubjects);
console.log("Percentage:" + percentage);
