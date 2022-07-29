"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    name;
    constructor(name) {
        this.name = name;
        console.log("Calculator - Student Name: " + this.name);
    }
    getTotal(marks) {
        let total = 0;
        //todo - implement logic to calculate total
        for (let mark of marks) {
            total = total + mark;
        }
        return total;
    }
    getPercentage(total, noOfSubjects) {
        let percentage = 0;
        //todo - implement a logic to calculate percentage
        percentage = total / noOfSubjects;
        return percentage;
    }
}
exports.Calculator = Calculator;
// Task: Create a class Calculator
// Create a constructor
// Create  a method getTotal(marks) which should return total
// Create a method - getPercentage(total,noOfSubjects) which should return percentage
