const jwt = require("jsonwebtoken");
import { safeMethods } from "@src/constants/auth";
import { IReq, IRes } from "@src/controller/types/types";
import { UserModel } from "@src/models/User";
import { NextFunction } from "express";

export const verifyToken = async (req: IReq, res: IRes, next: NextFunction) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    const token = req.headers.authorization.split(' ')[1];
    try{
        const verify = await jwt.verify(token, process.env.JWT_SECRET || "secret");
        if(verify){
            const user = await UserModel.findById(verify.id);
            if(user){
                req.user = user;
                next();
            }
            else{
                res.status(401).json({
                    message: "Unauthorized"
                })
            }
        }
    }
    catch(err){
        res.status(401).json({
            message: "Unauthorized"
        })
    }
    }
    else{
        req.user = undefined;
        next();
    }
};

export const isAuthenticatedOrReadOnly = async (req: IReq, res: IRes, next: NextFunction) => {
    if(safeMethods.includes(req.method) || req.user){
        next();
    }
    else{
        res.status(401).json({
            message: "Unauthorized"
        })
    }
}

export const isAuthenticated = async (req: IReq, res: IRes, next: NextFunction) => {
    if(req.user){
        next();
    }
    else{
        res.status(401).json({
            message: "Unauthorized"
        })
    }
}