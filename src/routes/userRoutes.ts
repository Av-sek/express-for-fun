import Paths from "@src/constants/Paths";

import {
  getProfileController,
  updateUserProfileController,
} from "@src/controller/userController";
import { isAuthenticated } from "@src/middleware/auth";
import { userUpdateValidator } from "@src/validators/userValidators";

import { Router } from "express";

export const userRouter = Router();
userRouter.use(isAuthenticated);

userRouter.get(Paths.User.Profile, getProfileController);
userRouter.put(
  Paths.User.Profile,
  userUpdateValidator,
  updateUserProfileController
);
