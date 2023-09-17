import { Router } from "express";
import jetValidator from "jet-validator";

import Paths from "../constants/Paths";
import { productRouter } from "./productRoutes";
import { authRouter } from "./authRoutes";

// **** Variables **** //

const apiRouter = Router();

// routes //
apiRouter.use(Paths.Auth.Base, authRouter);
apiRouter.use(Paths.Products.Base, productRouter);

// **** Export default **** //

export default apiRouter;
