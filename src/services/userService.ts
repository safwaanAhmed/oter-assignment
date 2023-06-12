import { UserModel } from '../models/userModel';
import { User } from '../config/interface'

class UserService {
    public async createUser(body: User): Promise<object> {
        try {
            const user: object = await UserModel.create({
                ...body
            });

            return user
        } catch (error) {
            throw error
        }
    }

    public async getUser(id: string): Promise<(object | null)> {
        return await UserModel.findById(id, { firstName: 1, lastName: 1, fullName: 1 });
    }

    public async updateUser(id: string, body: User): Promise<object | null> {
        try {
            return await UserModel.findByIdAndUpdate(id, body, { new: true, fields: { firstName: 1, lastName: 1, fullName: 1 } })
        } catch (error) {
            throw error
        }
    }

    public async deleteUser(id: string): Promise<(object | null)> {
        return await UserModel.findByIdAndDelete(id);
    }
}

export default UserService;
