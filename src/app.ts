import 'reflect-metadata';
import express from 'express'
import { useExpressServer } from 'routing-controllers';
import connectDB from './utils/db';
import UserController from './controllers/userController';
import env from './../config/env'
import { HttpErrorHandler } from './../src/middleware/errorHandler'

const app: express.Application = express();

useExpressServer(app, {
    routePrefix: '/api/v1',
    defaultErrorHandler: false,
    middlewares: [
        HttpErrorHandler
    ],
    controllers: [UserController],
});

const port = env.PORT || 3000;

connectDB()
    .then(() => {
        return app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(console.error)



export default app;
