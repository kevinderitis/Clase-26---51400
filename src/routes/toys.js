import { Router } from "express";
import { 
    getAllToysController,
    createToyController
} from "../controllers/toys.js";

const toyRouter = Router();

toyRouter.get('/', getAllToysController);
toyRouter.post('/', createToyController);


export default toyRouter;