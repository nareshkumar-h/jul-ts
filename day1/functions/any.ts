export {}

function getData(num:number):any{
    if (num < 0){
        return "Invalid";
    }
    return num * num;
}

let result:number = getData(2);