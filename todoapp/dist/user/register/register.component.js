"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterComponent = void 0;
const user_service_1 = require("../user.service");
class RegisterComponent {
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
                "password": this.password };
            console.log(userObj);
            //Step 3: call REST API
            //    const url = "http://localhost:3000/users";
            //    //post,get,patch,delete,put
            //    axios.post(url,userObj).then( (res:any)=>{
            //         console.log("Response:" , res.data);
            //    });
            const userService = new user_service_1.UserService();
            userService.addUser(userObj);
        }
        catch (err) {
            console.error("Error:" + err.message);
        }
    }
}
exports.RegisterComponent = RegisterComponent;
