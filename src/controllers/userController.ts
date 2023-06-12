import { JsonController, Post, Body, Get, Param, Delete, Put } from 'routing-controllers';
import UserService from '../services/userService';
import { Return, User } from '../config/interface'
import { success } from './../utils/response'
import { StatusCodes } from 'http-status-codes';
import { userMessages } from '../config/messages'
import { getFullName } from './../utils/common'

@JsonController('/users')
export default class UserController {

    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    @Post()
    async createUser(@Body() body: User): Promise<Return> {
        body.fullName = getFullName(body?.firstName, body?.lastName);
        const data: object = await this.userService.createUser(body);
        return success(StatusCodes.OK, userMessages.created, data)
    }
    @Get('/:id')
    async getUser(@Param('id') id: string): Promise<Return> {
        const data: (object | null) = await this.userService.getUser(id);
        const message: string = data ? userMessages.retrieved : userMessages.notFound;
        return success(StatusCodes.OK, message, data)
    }
    @Put('/:id')
    async updateUser(@Param('id') id: string, @Body() body: User): Promise<Return> {
        body.fullName = getFullName(body?.firstName, body?.lastName);
        const data: (object | null) = await this.userService.updateUser(id, body);
        const message: string = data ? userMessages.updated : userMessages.notFound;
        return success(StatusCodes.OK, message, data)
    }
    @Delete('/:id')
    async deleteUser(@Param('id') id: string): Promise<Return> {
        await this.userService.deleteUser(id);
        return success(StatusCodes.OK, userMessages.deleted)
    }
}
