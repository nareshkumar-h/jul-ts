import axios from 'axios';


const userObj = { name: "Nithya","email":"nit@gmail.com",password:"pass123"};

 //Step 3: call REST API
 const url = "http://localhost:3000/users";
 //post,get,patch,delete,put
 axios.post(url,userObj).then( (res:any)=>{
      console.log("Response:" , res.data);
 });