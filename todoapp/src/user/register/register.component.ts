import axios from 'axios';
import { UserService } from '../user.service';
export class RegisterComponent {

    public name!: string;
    public email!: string;
    public password!: string;

    constructor() {
        console.log("Register Component");
    }

    //<form onsubmit="register()>"
    register() {
        console.log("Name:" + this.name + ", email:" + this.email + ",password=" + this.password);

        try {
            //Step 1: Validation - name,email,password
            if (this.name == null || this.name == "") {
                throw new Error("Name cannot be empty");
            }
            console.log("Validation Success.");

            //Step 2: Prepare the data
            const userObj = { "name": this.name, "email": this.email, 
            "password": this.password};
            console.log(userObj);

           //Step 3: call REST API
        //    const url = "http://localhost:3000/users";
        //    //post,get,patch,delete,put
        //    axios.post(url,userObj).then( (res:any)=>{
        //         console.log("Response:" , res.data);
        //    });

            const userService = new UserService();
            userService.addUser(userObj);

        }
        catch (err: any) {
            console.error("Error:" + err.message);
        }


    }

}