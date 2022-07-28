export {}

class Calculator {

    constructor(){
        console.log("Calculator constructor");
    }

    getTotal(marks:number[]): number{
        let total = 0;
        //todo - implement logic to calculate total
        for(let mark of marks){
            total = total + mark;
        }
        return total;
    }

    getPercentage(total:number, noOfSubjects:number): number{
        let percentage = 0 ;
        //todo - implement a logic to calculate percentage
        percentage = total / noOfSubjects;
        return percentage;
    }

}
const calculatorObj = new Calculator();//Create an Object
const marks:number[] = [ 40,50,99,80]; //input
let total = calculatorObj.getTotal(marks);  //calling a method 
console.log("Total:" + total);

let noOfSubjects =  marks.length; //size of an array : 3 subjects
let percentage = calculatorObj.getPercentage(total, noOfSubjects);
console.log("Percentage:" + percentage);
// Task: Create a class Calculator
// Create a constructor
// Create  a method getTotal(marks) which should return total
// Create a method - getPercentage(total,noOfSubjects) which should return percentage
