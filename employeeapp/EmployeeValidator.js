"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeValidator = void 0;
class EmployeeValidator {
    //validate - name, salary 
    // id - optional 
    // name - must be not null/empty
    // salary - must be greater than zero
    validate(employee) {
        let isValid = true;
        //Validation - String
        if (employee.name == null) {
            console.log("Name cannot be empty");
            // throw new Error("Name cannot be empty");
            isValid = false;
        }
        return isValid;
    }
}
exports.EmployeeValidator = EmployeeValidator;
