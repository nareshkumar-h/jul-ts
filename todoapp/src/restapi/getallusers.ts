

/**
 * Get all user details
 */

import axios from "axios";

const url = "http://localhost:3000/users";

// select 
axios.get(url).then( (res:any)=>{
    const users = res.data;
    console.log("response", users);
})

