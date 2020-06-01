import { Router } from 'express';

import authRoutes from './auth/router';
import imagesRoutes from './images/router';

const router = Router();

router.use('/auth', authRoutes);
router.use('/images', imagesRoutes);

export default router;