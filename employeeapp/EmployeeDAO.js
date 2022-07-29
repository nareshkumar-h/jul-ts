"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeDAO = void 0;
class EmployeeDAO {
    employees = [];
    save(employee) {
        //todo 
        console.log("EmployeeDAO" + employee.name + employee.salary);
        this.employees.push(employee);
    }
    findAll() {
        // todo
        console.log("employee-findall");
        return this.employees;
    }
    searchByName(name) {
        //todo - ignore the case = Naresh vs naresh
        let searchResults = [];
        for (let emp of this.employees) {
            // if(emp.name == name)
            if (emp.name.toLowerCase() == name.toLowerCase()) {
                searchResults.push(emp);
            }
        }
        return searchResults;
    }
    searchByNameNew(name) {
        //List<Employee> searchResults = this.employees.stream().filter(e->e.name.equalsIgnoreCase(name)).collect(Collectors.toList);
        const searchResults = this.employees.filter(e => e.name == name);
        return searchResults;
    }
    //select * from employees where salary between ? and ?
    // select * from employees where salary >= ? and salary <= ?
    searchBySalary(min, max) {
        let searchResults = [];
        for (let emp of this.employees) {
            if (emp.salary >= min && emp.salary <= max) {
                searchResults.push(emp);
            }
        }
        return searchResults;
    }
    searchBySalaryNew(min, max) {
        return this.employees.filter(e => e.salary >= min && e.salary <= max); //[]
    }
}
exports.EmployeeDAO = EmployeeDAO;
