
/**
 * Get user details for the given id
 */

import axios from "axios";

const id = 2;
const url = "http://localhost:3000/users/" + id;

//select * from table where id = 1; // return 1 row
axios.get(url).then( (res:any)=>{
    const user = res.data;
    console.log(user);
});