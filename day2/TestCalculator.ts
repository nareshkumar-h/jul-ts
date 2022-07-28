import {Calculator} from "./Calculator";

const calculatorObj = new Calculator();//Create an Object
const marks:number[] = [ 40,50,99,80]; //input
let total = calculatorObj.getTotal(marks);  //calling a method 
console.log("Total:" + total);

let noOfSubjects =  marks.length; //size of an array : 3 subjects
let percentage = calculatorObj.getPercentage(total, noOfSubjects);
console.log("Percentage:" + percentage);