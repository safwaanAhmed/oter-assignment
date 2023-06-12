import { Middleware, ExpressErrorMiddlewareInterface, HttpError } from 'routing-controllers';
import { StatusCodes } from 'http-status-codes';
import { commonMessages } from './../../config/messages'
import { errorResponse } from './../utils/response'

@Middleware({ type: 'after' })
export class HttpErrorHandler implements ExpressErrorMiddlewareInterface {
    error(error: any, request: any, response: any, next: (err: any) => any) {
        console.log("In here =======>", error)
        const status = error?.httpCode || StatusCodes.INTERNAL_SERVER_ERROR;
        return response.status(status).json(errorResponse(status, error?.message || commonMessages.somethingWrong, error));
    }
}