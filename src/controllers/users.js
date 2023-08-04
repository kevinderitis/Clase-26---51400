import { 
    getAllUsersService,
    createUserService
} from "../services/users";

export const getAllUsersController = (req, res) => {
    let users = getAllUsersService();
    res.send({ status: 'success', payload: users})
};

export const createUserController = (req, res) => {
    let user = req.body;
    let result = createUserService(user)
    res.send({ status: 'success', payload: result})
};
