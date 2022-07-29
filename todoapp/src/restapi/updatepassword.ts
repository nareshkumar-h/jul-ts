import axios from 'axios';

/**
 * This REST API will call changepassword (only password)
 */


const userObj = { 
    id: 2, 
    password:"pass124"
};

 //Step 3: call REST API

 const url = "http://localhost:3000/users/" + userObj.id;
 
 //POST => insert , PUT=> update, PATCH => partial update
 axios.patch(url,userObj).then( (res:any)=>{
      console.log("Response:" , res.data);
 });

