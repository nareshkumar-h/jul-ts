function calculateGrade(mark:number):string{

    let grade:string = "";
    // validate input
    //write the logic
    
    //Rule 1: if mark above 90, then grade A
    //Rule 2: if mark between 80-90 then grade B
    //Rule 3: if mark less than 80 then grade F

    return grade;
}

console.log("Mark: 90, Grade:" + calculateGrade(95)); //A
console.log("Mark: 85, Grade:" + calculateGrade(85)); //B
console.log("Mark: 50, Grade:" + calculateGrade(50)); //F
console.log("Mark: -10, Grade:" + calculateGrade(-10)); //Invalid Mark