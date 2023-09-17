import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import {
  getAll,
  getOne,
  add,
  updateOne,
  deleteOne,
} from "@src/services/productService";

import { IReq, IRes } from "./types/express/misc";
import { IProduct } from "@src/models/Product";

export const getAllProducts = async (req: IReq, res: IRes) => {
  try {
    const products = await getAll();
    res.status(HttpStatusCodes.OK).json(products);
  } catch (err) {
    res.status(HttpStatusCodes.BAD_REQUEST).json(err);
  }
};

export const getOneProduct = async (req: IReq, res: IRes) => {
  try {
    const product = await getOne(req.params.id);
    res.status(HttpStatusCodes.OK).json(product);
  } catch (err) {
    res.status(HttpStatusCodes.BAD_REQUEST).json(err);
  }
};

export const addProduct = async (req: IReq<IProduct>, res: IRes) => {
  try {
    const product: IProduct = await add(req.body);
    res.status(HttpStatusCodes.OK).json(product);
  } catch (err) {
    res.status(HttpStatusCodes.BAD_REQUEST).json(err);
  }
};

export const updateProduct = async (req: IReq<IProduct>, res: IRes) => {
  try {
    const product: IProduct | undefined | null = await updateOne(
      req.params.id,
      req.body
    );
    res.status(HttpStatusCodes.OK).json(product);
  } catch (err) {
    res.status(HttpStatusCodes.BAD_REQUEST).json(err);
  }
};

export const deleteProduct = async (req: IReq, res: IRes) => {
  try {
    const product = await deleteOne(req.params.id);
    res.status(HttpStatusCodes.OK).json(product);
  } catch (err) {
    res.status(HttpStatusCodes.BAD_REQUEST).json(err);
  }
};
