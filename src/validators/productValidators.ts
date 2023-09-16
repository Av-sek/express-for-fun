import { ValidationChain, body, param } from "express-validator";

export const productRetrieveValidators: ValidationChain[] = [
  param("id").isMongoId().notEmpty(),
];

export const productCreateValidators: ValidationChain[] = [
  body("name").isString().notEmpty(),
  body("price").isFloat().toFloat(),
  body("description").isString().notEmpty(),
  body("image").isArray().notEmpty(),
  body("category").isString().notEmpty(),
  body("total_in_stock").isInt().toInt(),
];

export const productUpdateValidators: ValidationChain[] = [
  param("id").isString().notEmpty(),
  body("name").isString().notEmpty(),
  body("price").isFloat().toFloat(),
  body("description").isString().notEmpty(),
  body("image").isArray().notEmpty(),
  body("category").isString().notEmpty(),
  body("total_in_stock").isInt().toInt(),
];

export const productDeleteValidators: ValidationChain[] = [
    param("id").isMongoId().notEmpty(),
];
