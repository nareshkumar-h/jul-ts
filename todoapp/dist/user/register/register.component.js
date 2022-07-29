"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterComponent = void 0;
const axios_1 = __importDefault(require("axios"));
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
            const url = "http://localhost:3000/users";
            axios_1.default.post(url, userObj).then((res) => {
                console.log("Response:", res.data);
            });
        }
        catch (err) {
            console.error("Error:" + err.message);
        }
    }
}
exports.RegisterComponent = RegisterComponent;
