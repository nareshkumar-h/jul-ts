"use strict";
exports.__esModule = true;
var mark = 45;
//calculate grade
var grade;
//Rule 1: if mark above 90, then grade A
//Rule 2: if mark between 80-90 then grade B
//Rule 3: if mark less than 80 then grade F
if (mark >= 90) {
    grade = "A";
}
else if (mark >= 80 && mark < 90) {
    grade = "B";
}
else {
    grade = "F";
}
console.log("Mark:" + mark + ",Grade:" + grade);
