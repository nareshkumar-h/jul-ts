"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const employee_dao_1 = require("../dao/employee.dao");
const employee_1 = require("../model/employee");
const mail_util_1 = require("../util/mail-util");
const employee_validator_1 = require("../validator/employee.validator");
class EmployeeService {
    registerUser(name, email, password) {
        try {
            //Step 1: Validate form fields - name,email,password       
            employee_validator_1.EmployeeValidator.validateNewUserDetails(name, email, password);
            // Step 2: JDBC insert
            const employeeDAO = new employee_dao_1.EmployeeDAO();
            //employeeDAO.save(name,email,password);
            const emp = new employee_1.Employee(name, email, password);
            employeeDAO.save(emp);
            //Step 3: Mail/SMS Notification
            mail_util_1.MailUtil.sendMail(email);
        }
        catch (err) {
            // System.out.println(e.getMessage());
            console.log("Error:", err.message);
        }
    }
}
exports.EmployeeService = EmployeeService;
