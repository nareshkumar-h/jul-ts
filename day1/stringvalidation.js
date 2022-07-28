"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//login form 
const email = "n@gmail";
const password = "12345678";
//Validation - String
if (email == null || email == "" || email.trim() == "") {
    console.log("Email cannot be empty");
}
else if (email.indexOf("@gmail.com") == -1) {
    console.log("Invalid email. Mail Id should end with @gmail.com");
}
else if (password == null || password == "" || password.trim() == "") {
    console.log("Password cannot be empty");
}
else if (password.length < 8) {
    console.log("Password must be minimum 8 characters");
}
else {
    console.log("Valid Email and password");
}
