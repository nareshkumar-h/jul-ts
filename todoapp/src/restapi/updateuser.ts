import axios from 'axios';

/**
 * This REST API will call update user api.
 */


const userObj = { 
    id: 2, 
    name: "Suresh Kumar",
    email:"ss@gmail.com",password:"newpassword"};

 //Step 3: call REST API

 const url = "http://localhost:3000/users/" + userObj.id;
 
 //POST => insert , PUT=> update
 axios.put(url,userObj).then( (res:any)=>{
      console.log("Response:" , res.data);
 });

