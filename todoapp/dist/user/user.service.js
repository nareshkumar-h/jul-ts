"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const axios_1 = __importDefault(require("axios"));
class UserService {
    constructor() {
        this.API_URL = "http://localhost:3000/";
    }
    /**
     * To save user details
     * @param userObj
     */
    addUser(userObj) {
        const url = this.API_URL + "users";
        axios_1.default.post(url, userObj).then((res) => {
            console.log("Response:", res.data);
        });
    }
    /**
     * This api will delete the user
     * @param id
     */
    deleteUser(id) {
        const url = this.API_URL + "users/" + id;
        axios_1.default.delete(url).then((res) => {
            console.log("Deleted :", res.data);
        });
    }
    /**
     * This api will get all the user details
     */
    findAll() {
        const url = this.API_URL + "users";
        axios_1.default.get(url).then((res) => {
            const users = res.data;
            console.log("response", users);
        });
    }
    /**
     * This api will get user details for the given userId
     * @param id
     */
    getUser(id) {
        const url = this.API_URL + "users/" + id;
        axios_1.default.get(url).then((res) => {
            const user = res.data;
            console.log(user);
        });
    }
    /**
     * This api will update the user details for the given userId
     * @param userObj
     */
    updateUser(userObj) {
        const url = this.API_URL + "users/" + userObj.id;
        axios_1.default.put(url, userObj).then((res) => {
            console.log("Response:", res.data);
        });
    }
    /**
     * This api will update the password for the given userId
     * @param userObj
     */
    updatePassword(userObj) {
        const url = this.API_URL + "users/" + userObj.id;
        axios_1.default.patch(url, userObj).then((res) => {
            console.log("Response:", res.data);
        });
    }
}
exports.UserService = UserService;
