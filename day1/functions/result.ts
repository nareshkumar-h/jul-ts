// String calculatResult(int mark) {}

function calculateResult(mark:number):string{
    let result:string ;
    
    //validation
    if(mark <0 ){
        return "Invalid Mark";
    }
    //Business Logic
    result = mark >= 80 ? "PASS":"FAIL";

    return result;
}
let result:string = calculateResult(70);
let result1:string = calculateResult(-10);
console.log("Mark=70, Result:" + result);
console.log("Mark=-10, Result:" + result1);


