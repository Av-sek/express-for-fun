import { roles } from "@src/constants/auth";
import mongoose from "mongoose";

import { Schema, Document, Model } from "mongoose";
export interface IUser {
  username: string;
  bio: string;
  email: string;
  password: string;
  role: string;
  created_at: Date;
  updated_at: Date;
}

const UserSchema = new Schema({
  username: { type: String, required: false, unique: true },
  email: { type: String, required: false, unique: true },
  bio: { type: String, required: false },
  password: { type: String, select: false },
  role: {
    type: String,
    required: false,
    enum: roles,
    default: "user",
    select: false,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export const UserModel: Model<IUser> = mongoose.model<IUser>(
  "User",
  UserSchema
);
