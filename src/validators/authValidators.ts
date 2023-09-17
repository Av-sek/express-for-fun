import { ValidationChain, body } from "express-validator";


export const authRegisterValidators: ValidationChain[] = [
    body("email").isEmail().notEmpty(),
    body("password").isString().notEmpty(),
    body("username").isString().notEmpty(),
];

export const authLoginValidators: ValidationChain[] = [
    body("email").isEmail().notEmpty(),
    body("password").isString().notEmpty(),
];