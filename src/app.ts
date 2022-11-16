import express from 'express';
import router from './routes/productRoutes';
import routerUser from './routes/userRoutes';

const app = express();

app.use(express.json());
app.use(router);
app.use(routerUser);
export default app;
