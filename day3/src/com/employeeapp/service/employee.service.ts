import { EmployeeDAO } from "../dao/employee.dao";
import { Employee } from "../model/employee";
import { MailUtil } from "../util/mail-util";
import { EmployeeValidator } from "../validator/employee.validator";

export class EmployeeService {

    public registerUser(name:string, email:string, password:string){

        try
        {
            //Step 1: Validate form fields - name,email,password       
            EmployeeValidator.validateNewUserDetails(name,email,password);

            // Step 2: JDBC insert
           const employeeDAO = new EmployeeDAO();
            //employeeDAO.save(name,email,password);
            const emp = new Employee(name,email,password);
            employeeDAO.save(emp);

            //Step 3: Mail/SMS Notification
            MailUtil.sendMail(email);

        }
        catch(err:any){
            // System.out.println(e.getMessage());
            console.log("Error:" , err.message);
        }
    }
}