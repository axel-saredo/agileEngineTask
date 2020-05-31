import { SERVER_CONFIG } from '../../config/index';
import { Service } from 'typedi';
import axios from 'axios';
import { Request, Response } from 'express';

@Service()
export default class AuthService {
    private apiKey = SERVER_CONFIG.apiKey;
    private url = SERVER_CONFIG.authURL;
    public token: string;

    constructor(token: string) {
        this.token = token;
    }

    public async getToken(req: Request, res: Response) {
        const data = {
            apiKey: this.apiKey,
        }
        
        this.token = (await axios.post(this.url, data)).data.token;
        return this.token;
    }
}