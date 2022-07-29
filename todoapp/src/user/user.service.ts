import axios from "axios";

export class UserService {

    API_URL = "http://localhost:3000/";

    /**
     * To save user details
     * @param userObj 
     */
    addUser(userObj: any) {

        const url = this.API_URL + "users";
        axios.post(url, userObj).then((res: any) => {
            console.log("Response:", res.data);
        });

    }

    /**
     * This api will delete the user
     * @param id 
     */
    deleteUser(id: number) {
        const url = this.API_URL  + "users/"+ id;
        axios.delete(url).then((res: any) => {
            console.log("Deleted :", res.data);
        });
    }

    /**
     * This api will get all the user details
     */
    findAll() {
        const url = this.API_URL + "users";
        axios.get(url).then((res: any) => {
            const users = res.data;
            console.log("response", users);
        });

    }

    /**
     * This api will get user details for the given userId
     * @param id 
     */
    getUser(id: number) {
        const url = this.API_URL + "users/" + id;
        axios.get(url).then((res: any) => {
            const user = res.data;
            console.log(user);
        });
    }

    /**
     * This api will update the user details for the given userId
     * @param userObj 
     */
    updateUser(userObj: any) {
        const url = this.API_URL + "users/" + userObj.id;
        axios.put(url, userObj).then((res: any) => {
            console.log("Response:", res.data);
        });
    }

    /**
     * This api will update the password for the given userId
     * @param userObj 
     */
    updatePassword(userObj: any) {
        const url = this.API_URL + "users/" + userObj.id;
        axios.patch(url, userObj).then((res: any) => {
            console.log("Response:", res.data);
        });

    }
}