import { IReq, IRes } from "@src/controller/types/types";
import { ValidationError } from "@src/errors/routeError";
import { NextFunction } from "express";
import logger from 'jet-logger';


export const globalErrorHandler = (err: any, req: IReq, res: IRes, next: NextFunction) => {
  const status = err.status;
  const message = err.message || 'Internal Server Error';
  if(status === 500){
    logger.err(err, true);
    }
  const response: any = {
    status,
    message,
  };
  if (err instanceof ValidationError) {
    response.errors = err.errors;
  }

  res.status(status).json(response);
  };