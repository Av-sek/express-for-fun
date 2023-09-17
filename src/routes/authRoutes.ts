import Paths from "@src/constants/Paths";
import {
  authRegisterValidators,
  authLoginValidators,
} from "../validators/authValidators";

import { registerUser, loginUser } from "../controller/authController";

import { Router } from "express";

export const authRouter = Router();

authRouter.post(Paths.Auth.Register, authRegisterValidators, registerUser);
authRouter.post(Paths.Auth.Login, authLoginValidators, loginUser);
