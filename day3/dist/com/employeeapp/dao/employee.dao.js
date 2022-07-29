"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeDAO = void 0;
class EmployeeDAO {
    delete(id) {
    }
    //save(name:string,email:string,password:string)
    save(employee) {
        try {
            //Class.forName
            //Statement
            //insert into employees (name,email,password) values ( ?,?,?)
        }
        catch (err) {
            throw new Error("Unable to add employee details into the db");
        }
    }
    update() {
    }
}
exports.EmployeeDAO = EmployeeDAO;
