function areaOfCircle(radius:number):number {
    
    //validate input

    // business logic
    let result:number = 
    3.14*radius*radius;
    return result;
}

console.log("Radius:4 , area=" +
 areaOfCircle(4));