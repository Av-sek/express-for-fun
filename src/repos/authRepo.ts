import { UserModel, IUser } from "@src/models/User";

export const registerUser = (user: IUser) => {
    return UserModel.create(user);
    }

export const getUserWithEmail = (email: String) => {
    return UserModel.findOne({email: email});
    }