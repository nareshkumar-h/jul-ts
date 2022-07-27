export {}

// If the mark is above 80, PASS 
// if it is less than 80, FAIL

const mark:number = 95;
let result:string ;
if( mark >= 80){
    // console.log("PASS");
    result = "PASS";
}
else {
    // console.log("FAIL");
    result = "FAIL";
}

console.log("Result:" + result);

// Task: Calculate Grade
// >90=A
//80-90=>B
//less than 80 =F
