import axios from 'axios';

/**
 * This REST API will call add user api.
 */

const userObj = { name: "Suresh","email":"s@gmail.com",password:"pass123"};

 //Step 3: call REST API

 const url = "http://localhost:3000/users";
 
 //POST => insert 
 axios.post(url,userObj).then( (res:any)=>{
      console.log("Response:" , res.data);
 });

