import { Schema, SchemaType, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IUser {
    firstName: string;
    lastName: string;
    fullName?: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    fullName: String
});

// 3. Create a Model.
const UserModel = model<IUser>('User', userSchema);

export { UserModel, userSchema };