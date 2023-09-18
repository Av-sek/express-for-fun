import { ProductModel, IProduct } from "@src/models/Product";

export const findAll = () => {
  return ProductModel.find();
};

export const findOne = (id: string) => {
  const product = ProductModel.findById(id);
  return product;
};

export const create = (product: IProduct) => {
  return ProductModel.create(product);
};

export const update = async (id: string, product: IProduct) => {
  const productToUpdate = await ProductModel.findByIdAndUpdate(id, product, {new: true});
  return productToUpdate;
};

export const remove = (id: string) => {
  const productToRemove = ProductModel.findByIdAndRemove(id, {new: true});
  return productToRemove;
};
