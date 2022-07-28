"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = require("./Employee");
const emp1 = new Employee_1.Employee(1, "Naresh", 15000);
const emp2 = new Employee_1.Employee(2, "Ravi", 65000);
let employees = [];
//How to add items to an array
employees.push(emp1);
employees.push(emp2);
//Iterate 
for (let emp of employees) {
    console.log(emp.empId + "-" + emp.name + "- Rs." + emp.salary);
}
//Total no of employees
console.log("No of employees:" + employees.length);
//Total Amount paid for all employees by the client =80,000
let totalSalary = 0;
//write the logic here
console.log("Total Amount needed for next month :Rs." + totalSalary);
