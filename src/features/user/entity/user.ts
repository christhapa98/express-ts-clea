// user model here

import mongoose, { Document, Schema } from "mongoose";

export interface User extends Document {}

const userSchema= new Schema<User>({});

const UserModel = mongoose.model<User>("User", userSchema);

export default UserModel;
