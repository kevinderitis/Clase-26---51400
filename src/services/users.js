import {
     getAllUsers,
     createUser
} from "../dao/usersDAOMem.js"
import { isEnabled } from "./taxes.js";

export const createUserService = user => {
    user.property2 = 'coderhouse';
    let userAdded;
    if(isEnabled(user.email)){
        userAdded = createUser(user);
    }
    return userAdded;
}

export const getAllUsersService = () => {
    return getAllUsers()
}