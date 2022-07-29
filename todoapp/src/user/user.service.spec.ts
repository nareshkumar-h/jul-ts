import { UserService } from "./user.service";


const userService = new UserService();

//To add user
// const userObj = {
//     name:"Mani", 
//     email:"m@gmail.com",
//     password:"pass123"
// };

//userService.addUser(userObj);

// delete a user 
//let id = 2;
//userService.deleteUser(id);

//3. Get all users
// userService.findAll();

//4. Get user details for the given id
// let id =1;
// userService.getUser(id);

//5. Update the userdetails for the given id
// const userObj = {
//     id: 1,
//     name:"N",
//     email:"nn@gmail.com",
//     password:"pass"
// };

// userService.updateUser(userObj);

//6. change password

const userObj = { 
    id: 1, 
    password:"pass124"
};
userService.updatePassword(userObj);


