import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import {
  registerUser as register,
  loginUser as login
} from "@src/services/authService";

import { IReq, IRes } from "./types/express/misc";
import { IUser } from "@src/models/User";
import { validationResult } from "express-validator";

export const registerUser = async (req: IReq<IUser>, res: IRes) => {
    try {
        validationResult(req).throw();
        const user: IUser = await register(req.body);
        res.status(HttpStatusCodes.OK).json(user);
    } catch (err) {
        res.status(HttpStatusCodes.BAD_REQUEST).json({message: err.message});
    }
    };

export const loginUser = async (req: IReq<IUser>, res: IRes) => {
    try {
        validationResult(req).throw();
        const response = await login(req.body);
        res.status(HttpStatusCodes.OK).json(response);
    } catch (err) {
        res.status(HttpStatusCodes.BAD_REQUEST).json({message: err.message});
    }
}