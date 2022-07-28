import { Employee } from "./Employee";

export class EmployeeValidator {


    //validate - name, salary 
    // id - optional 
    // name - must be not null/empty
    // salary - must be greater than zero
    public validate(employee:Employee):boolean{

        let isValid = true;
        //Validation - String
        if(employee.name == null ){
            console.log("Name cannot be empty");
            // throw new Error("Name cannot be empty");
            isValid = false;
        }

        return isValid;

    }
}