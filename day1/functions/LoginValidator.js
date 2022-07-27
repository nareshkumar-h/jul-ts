"use strict";
exports.__esModule = true;
var LoginValidator = /** @class */ (function () {
    // compiler will provide default constructor ( if we didn't add any constructor)
    function LoginValidator() {
        console.log("Constructor called");
    }
    // public static validate(email:string,password:string):void {
    LoginValidator.prototype.validate = function (email, password) {
        var errorMessage = "";
        if (email == "") {
            errorMessage = "Email cannot be empty";
        }
        else if (password == "") {
            errorMessage = "Password cannot be empty";
        }
        // return errorMessage;
        console.log("ErrorMessage:" + errorMessage);
    };
    return LoginValidator;
}());
// LoginValidator.validate("n@gmail.com",""); //static method
var loginValidator = new LoginValidator(); // Create an object for the class
loginValidator.validate("n@gmail.com", ""); // Accessing the instance methods using the objects
