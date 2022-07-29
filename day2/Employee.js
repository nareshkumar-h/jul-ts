"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    empId;
    name;
    salary;
    active;
    // public empId:number;
    // public name:string;
    // public salary:number;
    // public active: boolean;
    // constructor(empId:number, name:string, 
    //     salary:number, active:boolean){
    //     this.empId = empId;
    //     this.name = name;
    //     this.salary = salary;
    //     this.active = active;
    // }
    constructor(empId, name, salary, active) {
        this.empId = empId;
        this.name = name;
        this.salary = salary;
        this.active = active;
    }
}
exports.Employee = Employee;
