// String calculatResult(int mark) {}
function calculateResult(mark) {
    var result;
    //validation
    if (mark < 0) {
        return "Invalid Mark";
    }
    //Business Logic
    result = mark >= 80 ? "PASS" : "FAIL";
    return result;
}
var result = calculateResult(70);
var result1 = calculateResult(-10);
console.log("Mark=70, Result:" + result);
console.log("Mark=-10, Result:" + result1);
