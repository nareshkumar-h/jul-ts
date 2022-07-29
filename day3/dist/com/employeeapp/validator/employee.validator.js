"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeValidator = void 0;
class EmployeeValidator {
    static validateNewUserDetails(name, email, password) {
        if (name == null) {
            throw new Error("Name cannot be empty");
        }
        if (email == null) {
            throw new Error("Email cannot be empty");
        }
        if (password == null) {
            throw new Error("Password cannot be empty");
        }
    }
}
exports.EmployeeValidator = EmployeeValidator;
