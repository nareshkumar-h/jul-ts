export class EmployeeValidator {


    public static validateNewUserDetails(name:string, email:string, password:string){
        if(name == null ){
            throw new Error("Name cannot be empty");
        }
        if(email == null){
            throw new Error("Email cannot be empty");
        }

        if(password == null){
            throw new Error("Password cannot be empty");
        }

    }

}