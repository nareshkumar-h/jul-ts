"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getData(num) {
    if (num < 0) {
        return "Invalid";
    }
    return num * num;
}
let result = getData(2);
