import { JsonController, Get } from 'routing-controllers';
import { Return } from '../config/interface'
import { success } from '../utils/response'
import { StatusCodes } from 'http-status-codes';
import { commonMessages } from '../config/messages'

@JsonController()
export default class HealthController {

    @Get()
    getUser(): Return {
        return success(StatusCodes.OK, commonMessages.success)
    }
}
