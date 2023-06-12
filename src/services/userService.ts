import { UserModel } from '../models/userModel';
import { User } from './../../config/interface'

class UserService {
    public async createUser(body: User): Promise<object> {
        try {
            const user = await UserModel.create({
                ...body
            });

            return user
        } catch (error) {
            throw error
        }
    }

    public async getUser(id: string): Promise<(object | null)> {
        return await UserModel.findById(id);
    }

    public async updateUser(id: string, body: User): Promise<object | null> {
        try {
            const updatedUser = await UserModel.findByIdAndUpdate(id, body, { new: true })

            return updatedUser
        } catch (error) {
            throw error
        }
    }

    public async deleteUser(id: string): Promise<(object | null)> {
        return await UserModel.findByIdAndDelete(id);
    }
}

export default UserService;
