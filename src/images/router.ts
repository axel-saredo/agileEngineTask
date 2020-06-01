import Container from 'typedi';
import { Router } from 'express';

import { ImagesController } from '../images/controllers/images.controller';

const router = Router();

const imagesController: ImagesController = Container.get(ImagesController);

router
    .route('/')
    .get((req, res) => imagesController.getImages(req, res));

router
    .route('/:id')
    .get((req, res) => imagesController.getImageById(req, res));

export default router;