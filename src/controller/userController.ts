import { updateProfileService } from "@src/services/userService";
import { IReq, IRes } from "./types/types";
import { IUser } from "@src/models/User";
import { validationResult } from "express-validator";
import { NextFunction } from "express";
import { ValidationError } from "@src/errors/routeError";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";


export const getProfileController = async (req: IReq, res: IRes, next: NextFunction) => {
    try { 
        let user = req.user;
        if(user){
            delete user.password;
            res.status(200).json({
                message: "Profile",
                user
            })
        }
    }
    catch(err){
        next(err);
    }
}

export const updateUserProfileController = async (req: IReq<IUser>, res: IRes, next: NextFunction) => {
    try { 
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            throw new ValidationError(HttpStatusCodes.BAD_REQUEST,"Validation Error", errors.array());
        }
        let user = req.user;
        if(user){
            const updatedUser = await updateProfileService(user._id, req.body);
            res.status(200).json({
                message: "Profile Updated",
                user: updatedUser
            })
        }
    }
    catch(err){
        next(err);
    }
}