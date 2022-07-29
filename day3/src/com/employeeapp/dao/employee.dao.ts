import { Employee } from "../model/employee";

export class EmployeeDAO {

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

    delete(){

    }
}