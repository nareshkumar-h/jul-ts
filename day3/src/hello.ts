export {}

// Learn Try/Catch = Error Handling

try{
    let name:string = "Naresh";
    console.log("Name:" + name);
    if(name==""){
        throw new Error("Invalid Name")
    }
    console.log("Valid Name");
}
catch(err:any){
    console.log("Error:" + err.message);
}