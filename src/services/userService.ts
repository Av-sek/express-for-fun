import { IUser } from "@src/models/User";
import { updateProfile } from "@src/repos/userRepo";


export const updateProfileService = (id: string, user: IUser) => {
    return updateProfile(id, user);
    }