import { Router } from "express";
import { 
    getAllUsersController, 
    createUserController
} from "../controllers/users.js";

const userRouter = Router();

userRouter.get('/', getAllUsersController);
userRouter.post('/', createUserController)


export default userRouter;