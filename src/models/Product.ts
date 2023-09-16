import mongoose from "mongoose";
import { Schema, Document, Model } from "mongoose";

export interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string[];
  category: string;
  total_in_stock: number;
  created_at: Date;
  updated_at: Date;
}

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: [{ type: String, required: true }],
  category: { type: String, required: true },
  total_in_stock: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export const ProductModel: Model<IProduct> = mongoose.model<IProduct>("Product", ProductSchema);