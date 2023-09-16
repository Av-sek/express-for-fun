import mongoose from "mongoose";

import { Schema, Document, Model } from "mongoose";
export interface IUser{
  username: string;
  email: string;
  authentication: {
    password: string;
    salt: string;
  };
  created_at: Date;
  updated_at: Date;
}

const UserSchema = new Schema({
  username: {type:String, required: false, unique: true},
  email: {type:String, required: false, unique: true},
  authentication: {
    password: {type:String, required: true, select: false},
    salt: {type:String, required: true, select: false},
  },
  created_at: {type:Date, default: Date.now},
  updated_at: {type:Date, default: Date.now},
});

export const UserModel: Model<IUser> = mongoose.model<IUser>('User', UserSchema);

