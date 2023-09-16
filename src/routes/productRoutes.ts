import Paths from "@src/constants/Paths";
import {
  productRetrieveValidators,
  productCreateValidators,
  productUpdateValidators,
  productDeleteValidators,
} from "../validators/productValidators";
import {
  getAllProducts,
  getOneProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controller/productController";
import { Router } from "express";

export const productRouter = Router();

productRouter.get(Paths.Products.Get, getAllProducts);
productRouter.get(
  Paths.Products.Retrieve,
  productRetrieveValidators,
  getOneProduct
);
productRouter.post(
  Paths.Products.Add, 
  productCreateValidators, 
  addProduct
  );
productRouter.put(
  Paths.Products.Update,
  productUpdateValidators,
  updateProduct
);
productRouter.delete(
  Paths.Products.Delete,
  productDeleteValidators,
  deleteProduct
);
