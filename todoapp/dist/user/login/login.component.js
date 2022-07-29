"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginComponent = void 0;
const axios_1 = __importDefault(require("axios"));
class LoginComponent {
    //<form onsubmit="login()>"
    onSubmit() {
        console.log("Login: email=" + this.email + ",password=" + this.password);
        //to check whether the given email and password is exists in backend REST API
        //Step 1: To get all the users
        let url = "http://localhost:3000/users";
        axios_1.default.get(url).then((res) => {
            let users = res.data;
            console.log(users);
            //Step 2: iterate the user and check if the given email/password is exists
            let isExists = false;
            for (let user of users) {
                if (user.email == this.email && user.password == this.password) {
                    isExists = true;
                    break;
                }
            }
            console.log("IsExists:" + isExists);
            //Step 3: Display Message
            if (isExists) {
                console.log("Successfully LoggedIn");
            }
            else {
                console.log("Invalid Login Credentials. Please reenter the details.");
            }
        });
    }
}
exports.LoginComponent = LoginComponent;
