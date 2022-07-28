"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginValidator {
    // compiler will provide default constructor ( if we didn't add any constructor)
    constructor() {
        console.log("Constructor called");
    }
    // public static validate(email:string,password:string):void {
    validate(email, password) {
        let errorMessage = "";
        if (email == "") {
            errorMessage = "Email cannot be empty";
        }
        else if (password == "") {
            errorMessage = "Password cannot be empty";
        }
        // return errorMessage;
        console.log("ErrorMessage:" + errorMessage);
    }
}
//LoginValidator.validate("n@gmail.com",""); //static method
const loginValidator = new LoginValidator(); // Create an object for the class
loginValidator.validate("n@gmail.com", ""); // Accessing the instance methods using the objects
