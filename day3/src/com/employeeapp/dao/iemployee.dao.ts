import { Employee } from "../model/employee";

export interface IEmployeeDAO {
    save(employee:Employee):void;
    delete(id:number):void;
}