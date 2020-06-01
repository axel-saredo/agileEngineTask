import express from 'express';
import { json } from 'body-parser';

import { SERVER_CONFIG } from './config/index';
import apiRoutes from './router';

const app = express();

app.use(json());
app.use('/api', apiRoutes);

const port = SERVER_CONFIG.port

app.listen(port, () => {
    console.log(`Server listening on ${port}...`);
});