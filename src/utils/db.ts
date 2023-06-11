// src/utils/db.ts

import { connect } from 'mongoose';
import env from '../../config/env'

const connectDB = async () => {
    try {
        if (!env.MONGO_URI) {
            throw new Error('MONGO_URI environment variable is missing');
        }
        await connect(env.MONGO_URI);
        console.log('Connected to MongoDB');
        return
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1)
    }
};

export default connectDB;
