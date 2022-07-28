"use strict";
//Data Access Object (DAO) => insert/update/delete/select 
//create table employees ( name varchar(100));
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeDAO = void 0;
class EmployeeDAO {
    //insert into employees(name) values (?)
    static save(name) {
        console.log("EmployeeDAO- save" + name);
        this.employees.push(name);
    }
    //select * from employees; returns [] ( 1 or more);
    static findAll() {
        console.log("EmployeeDAO-findAll");
        return this.employees;
    }
    //select * from employees where id = ?; //returns 1 row
    static findOne(index) {
        return this.employees[index];
    }
    //update employees set name = ? where id = ?; // 1 row 
    static update(index, name) {
        this.employees[index] = name;
    }
    //delete from employees where id = ?; 1 row
    static delete(index) {
        this.employees.splice(index, 1);
    }
    static search(name) {
        let results = [];
        // implement logic
        return results;
    }
}
exports.EmployeeDAO = EmployeeDAO;
EmployeeDAO.employees = []; //db table
