import { Employee } from "../model/employee";
import { IEmployeeDAO } from "./iemployee.dao";

export class EmployeeDAO implements IEmployeeDAO {
   
    delete(id: number): void {
        
    }

    //save(name:string,email:string,password:string)
    save(employee:Employee)
    {
        try{
            //Class.forName
           //Statement
            //insert into employees (name,email,password) values ( ?,?,?)

        }
        catch(err:any){
            throw new Error("Unable to add employee details into the db");
        }

    }

    update(){

    }

   
}