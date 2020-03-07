import { Router } from 'express';
import AuthController from '../app/controllers/AuthController';
import ProgrammerController from '../app/controllers/ProgrammerController';
import UserController from '../app/controllers/UserController';
import auth from '../app/middlewares/auth';

const routes = Router();

routes.post('/auth', AuthController.store);

routes.use(auth);

routes.get('/usuarios', UserController.index);
routes.post('/usuarios', UserController.store);
routes.delete('/usuarios/:id', UserController.destroy);

routes.get('/programadores', ProgrammerController.index);
routes.get('/programadores/:id', ProgrammerController.show);
routes.post('/programadores', ProgrammerController.store);
routes.put('/programadores/:id', ProgrammerController.update);
routes.delete('/programadores/:id', ProgrammerController.destroy);

export default routes;
