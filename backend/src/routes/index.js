import { Router } from 'express';
import AuthController from '../app/controllers/AuthController';
import ProgrammerController from '../app/controllers/ProgrammerController';
import UserController from '../app/controllers/UserController';
import auth from '../app/middlewares/auth';
import permission from './../app/middlewares/permission';
import roles from './../app/utils/roles';

const routes = Router();

routes.post('/auth', AuthController.store);

routes.use(auth);

routes.get(
  '/usuarios',
  permission([roles.admin, roles.gestor]),
  UserController.index
);
routes.post('/usuarios', permission(roles.admin), UserController.store);
routes.delete('/usuarios/:id', permission(roles.admin), UserController.destroy);

routes.get('/programadores', ProgrammerController.index);
routes.get('/programadores/:id', ProgrammerController.show);
routes.post(
  '/programadores',
  permission(roles.admin, roles.gestor),
  ProgrammerController.store
);
routes.put(
  '/programadores/:id',
  permission(roles.admin, roles.gestor),
  ProgrammerController.update
);
routes.delete(
  '/programadores/:id',
  permission(roles.admin, roles.gestor),
  ProgrammerController.destroy
);

export default routes;
