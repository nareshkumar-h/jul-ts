"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Learn Try/Catch = Error Handling
try {
    let name = "Naresh";
    console.log("Name:" + name);
    if (name == "") {
        throw new Error("Invalid Name");
    }
    console.log("Valid Name");
}
catch (err) {
    console.log("Error:" + err.message);
}
