//Variable Arguments 

// function add(a,b){
//     return a+b;
// }

// function add(a,b,c){
//     return a+b+c;
// }

// REST Parameters
function add(...nums){
    let total = 0;
    for(let n of nums){
        total = total + n;
    }
    return total;
}

console.log("No Args = " +add());
console.log("2= " +add(2));
console.log("2+3= " +add(2,3));
console.log("2+3+4= " +add(2,3,4));
console.log("2+3+4+5= "+ add(2,3,4,5));
