import mongoose from "mongoose";

import { Schema, Document, Model } from "mongoose";
export interface IUser {
  username: string;
  email: string;
  password: string;
  role: string;
  created_at: Date;
  updated_at: Date;
}

const UserSchema = new Schema({
  username: { type: String, required: false, unique: true },
  email: { type: String, required: false, unique: true },
  password: { type: String, required: false },
  role: {
    type: String,
    required: false,
    enum: ["admin", "user"],
    default: "user",
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export const UserModel: Model<IUser> = mongoose.model<IUser>(
  "User",
  UserSchema
);
