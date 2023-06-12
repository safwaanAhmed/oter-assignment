import dotenv from 'dotenv';

const result = dotenv.config();

if (result.error) {
  console.error('Error loading .env file:', result.error);
  process.exit(1);
}

export default {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    MONGO_URI: process.env.MONGO_URI
}