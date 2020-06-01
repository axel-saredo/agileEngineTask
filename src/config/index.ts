import dotenv from 'dotenv';

dotenv.config();

export const SERVER_CONFIG = {
    port: parseInt(process.env.PORT!) || 3001,
    apiKey: process.env.API_KEY,
    authURL: process.env.AUTH_URL!,
    imagesUrl: process.env.IMAGES_URL!,
}