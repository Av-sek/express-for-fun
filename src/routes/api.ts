import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../constants/Paths';
import {productRouter} from './productRoutes';


// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();


// routes //
apiRouter.use(Paths.Products.Base, productRouter);


// **** Export default **** //

export default apiRouter;
