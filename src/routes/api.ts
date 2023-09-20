import { Router } from "express";
import jetValidator from "jet-validator";

import Paths from "../constants/Paths";
import { productRouter } from "./productRoutes";
import { authRouter } from "./authRoutes";
import { userRouter } from "./userRoutes";

// **** Variables **** //

const apiRouter = Router();

// routes //
apiRouter.use(Paths.Auth.Base, authRouter);
apiRouter.use(Paths.Products.Base, productRouter);
apiRouter.use(Paths.User.Base, userRouter);
// **** Export default **** //

export default apiRouter;
