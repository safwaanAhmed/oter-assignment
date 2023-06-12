import { Schema, SchemaType, model } from 'mongoose';
import { User } from './../../config/interface'

const userSchema = new Schema<User>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    fullName: String
});

const UserModel = model<User>('User', userSchema);

export { UserModel, userSchema };