import Container from 'typedi';
import { Router } from 'express';

import { AuthController } from './controllers/auth.controller';

const router = Router();

const authController: AuthController = Container.get(AuthController);

router
    .route('/')
    .post((req, res) => authController.authenticate(req, res));

export default router;