import { UserModel, IUser } from "@src/models/User";

export const updateProfile = (id: string, user: IUser) => {
    return UserModel.findByIdAndUpdate(id, user, {new: true});
    };