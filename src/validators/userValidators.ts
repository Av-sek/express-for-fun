import { ValidationChain, body } from "express-validator";

export const userUpdateValidator: ValidationChain[] = [
  body("username").isString().notEmpty().optional(),
  body("email").isEmail().notEmpty().optional(),
  body("bio").isString().notEmpty().optional(),
];
