
//Default Parameters:
function addition(a, b, c = 0) {
    let sum = a + b + c;
    return sum;
}


console.log(addition(2, 3, 5));
console.log(addition(2, 3));