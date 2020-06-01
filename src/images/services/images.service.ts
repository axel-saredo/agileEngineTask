import { SERVER_CONFIG } from '../../config/index';
import { Service } from 'typedi';
import axios from 'axios';
import { Request, Response, } from 'express';
import AuthService from '../../auth/services/auth.service';
import { Image } from '../models/image';

@Service()
export default class ImagesService {
    private url = SERVER_CONFIG.imagesUrl;

    private hasMorePages: boolean;

    constructor(private authService: AuthService, hasMorePages: boolean) {
        this.hasMorePages = hasMorePages;
    }

    public async getImages(req: Request, res: Response) {
        await this.getImagesByPage();
    } 
    
    private async getImagesByPage() {
        let page = 1;

        while (this.hasMorePages) {
            let newImages = await this.getImagesOfCurrentPage(page);
            page++;
            newImages.concat(newImages);
        }
    }

    private async getImagesOfCurrentPage(page: number) {
        const config = {
            headers: {
                Authorization: `Bearer ${this.authService.token}`
            }
        }

        const images = (await axios.get(`${this.url}?page=${page}`, config)).data;
        this.hasMorePages = images.hasMore;

        return images.pictures;
    }

    public async getImageDataById(req: Request, res: Response) {
        const id = req.params.id;

        const config = {
            headers: {
                Authorization: `Bearer ${this.authService.token}`
            }
        }

        const imageData: Image = (await axios.get(`${this.url}/${id}`, config)).data;
        return imageData;
    }
}