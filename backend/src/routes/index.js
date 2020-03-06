import { Router } from 'express';
import ProgrammerController from '../app/controllers/ProgrammerController';

const routes = Router();

routes.get('/programadores', ProgrammerController.index);
routes.get('/programadores/:id', ProgrammerController.show);
routes.post('/programadores', ProgrammerController.store);
routes.put('/programadores/:id', ProgrammerController.update);
routes.delete('/programadores/:id', ProgrammerController.destroy);

export default routes;
