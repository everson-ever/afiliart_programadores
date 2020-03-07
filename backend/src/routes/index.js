import { Router } from 'express';
import auth from '../app/middlewares/auth';
import authRouter from './authRouter';
import programmerRouter from './programmerRouter';
import userRouter from './userRouter';
const routes = Router();

routes.use(authRouter);

/* MIDDLEWARE DE AUTENTICAÇÃO */
routes.use(auth);

routes.use(userRouter);
routes.use(programmerRouter);

export default routes;
