import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {type:String, required: false, unique: true},
  email: {type:String, required: false, unique: true},
  authentication: {
    password: {type:String, required: true, select: false},
    salt: {type:String, required: true, select: false},
  },
  created_at: {type:Date, default: Date.now},
  updated_at: {type:Date, default: Date.now},
});

export const UserModel = mongoose.model('User', UserSchema);

