
/**
 * Delete the user for the given id
 */

import axios from "axios";

const id = 1;
const url = "http://localhost:3000/users/" + id;

axios.delete(url).then( (res:any)=>{
    console.log("Deleted :" , res.data);
})
