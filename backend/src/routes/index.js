import { Router } from 'express';
import ProgrammerController from '../app/controllers/ProgrammerController';

const routes = Router();

routes.get('/programadores', ProgrammerController.index);

export default routes;
