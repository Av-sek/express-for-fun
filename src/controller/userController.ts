import { updateProfileService } from "@src/services/userService";
import { IReq, IRes } from "./types/types";
import { IUser } from "@src/models/User";
import { validationResult } from "express-validator";


export const getProfileController = async (req: IReq, res: IRes) => {
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
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export const updateUserProfileController = async (req: IReq<IUser>, res: IRes) => {
    try { 
        validationResult(req).throw();
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
        res.status(400).json({
            message: err.errors
        })
    }
}