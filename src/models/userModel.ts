import { Schema, SchemaType, model } from 'mongoose';

interface IUser {
    firstName: string;
    lastName: string;
    fullName?: string;
}

const userSchema = new Schema<IUser>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    fullName: String
});

const UserModel = model<IUser>('User', userSchema);

export { UserModel, userSchema };