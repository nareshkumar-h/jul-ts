function add(a,b){
    return a+b;
}

let sub = function(a,b){
    return a-b;
}

//JavaScript Lambda Function is a short anonymous function that takes one or more parameters 
//and has only one expression.
let mul = (a,b) => a*b;

let a = 15;
let b = 8;

console.log("Addition:" + add(a,b));
console.log("Sub:" + sub(a,b));
console.log("Mul:" + mul(a,b));

