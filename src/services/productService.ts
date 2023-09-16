import {
    findAll,
    findOne,
    create,
    update,
    remove
} from '../repos/productRepo';
import {IProduct} from '../models/Product';

export const getAll = () => {
    return findAll();
}

export const getOne = (id: string) => {
    return findOne(id);
}

export const add = (product: IProduct) => {
    return create(product);
}

export const updateOne = async (id: string, product: IProduct) => {
    return await update(id, product);
}

export const deleteOne = (id: string) => {
    return remove(id);
}
