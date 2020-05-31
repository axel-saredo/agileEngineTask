import "reflect-metadata";

import { Service } from 'typedi';
import { Request, Response } from 'express';
import AuthService from '../services/auth.service';

@Service()
export class AuthController {
    constructor(private authService: AuthService) {}

    async authenticate(req: Request, res: Response) {
        try {
            const token = await this.authService.getToken(req, res);
            res.json(token);
        } catch (error) {
            console.error(error);
        }
    }
}