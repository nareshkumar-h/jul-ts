import { Employee } from "./Employee";

export class EmployeeDAO {

    employees:Employee[] = [];

    public save(employee:Employee ){
        //todo 
        console.log("EmployeeDAO" +employee.name + employee.salary);
        this.employees.push(employee);
    }

    public findAll(){
        // todo
        console.log("employee-findall" );
        return this.employees;
    }

    public searchByName(name:string){
        //todo - ignore the case = Naresh vs naresh
        let searchResults = []; 

        for(let emp of this.employees){
            // if(emp.name == name)
            if( emp.name.toLowerCase() == name.toLowerCase())
            {
                searchResults.push(emp);
            }
        }
        return searchResults;
    }

    public searchByNameNew(name:string){
        //List<Employee> searchResults = this.employees.stream().filter(e->e.name.equalsIgnoreCase(name)).collect(Collectors.toList);
        const searchResults = this.employees.filter( e=> e.name == name);
        return searchResults;
    }

    //select * from employees where salary between ? and ?
    // select * from employees where salary >= ? and salary <= ?
    public searchBySalary(min:number,max:number){

        let searchResults = [];
        for(let emp of this.employees){
            if ( emp.salary >= min && emp.salary <= max){
                searchResults.push(emp);
            }
        }        
        return searchResults;
    } 

    public searchBySalaryNew(min:number,max:number){
        return this.employees.filter(e=> e.salary >= min && e.salary <= max); //[]
    }
    
}