import "reflect-metadata";

import { Service } from 'typedi';
import { Request, Response } from 'express';
import ImagesService from "../services/images.service";

@Service()
export class ImagesController {
    constructor(private imagesService: ImagesService) {}

    async getImageById(req: Request, res: Response) {
        try {
            const imageData = await this.imagesService.getImageDataById(req, res);
            res.json(imageData);
        } catch (error) {
            console.error(error);
        }
    }

    async getImages(req: Request, res: Response) {
        try {
            const images = await this.imagesService.getImages(req, res);
            res.json(images);
        } catch (error) {
            console.error(error);
        }
    }
}