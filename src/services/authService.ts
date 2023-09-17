import { IUser } from "@src/models/User";
import {
    registerUser as register,
    getUserWithEmail
} from '../repos/authRepo'

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { saltRounds } from "@src/constants/auth";

export const registerUser = async (user: IUser) => {
    try {
        const {password} = user;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        user.password = hash;
        const newUser = await register(user);
        return newUser;
    } catch (err) {
        throw err;
    }
}

export const loginUser = async (user: IUser) => {
    try {
        const {password} = user;
        console.log(password)
        const existingUser = await getUserWithEmail(user.email);
        console.log(existingUser)
        console.log(user)
        if (existingUser && bcrypt.compareSync(password, existingUser.password)) {
            const token = jwt.sign({id: existingUser._id}, process.env.JWT_SECRET || "secret", {
                expiresIn: "1d"
            });
            return {
                access_token: token
            };
        } else {
            throw new Error("Invalid credentials");
        }
    } catch (err) {
        throw err;
    }
}
