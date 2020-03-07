import { Router } from 'express';
import roles from '../../app/utils/roles';
import UserController from './../../app/controllers/UserController';
import permission from './../../app/middlewares/permission';

const routes = Router();

routes.get(
  '/usuarios',
  permission([roles.admin, roles.gestor]),
  UserController.index
);
routes.post('/usuarios', permission(roles.admin), UserController.store);
routes.delete('/usuarios/:id', permission(roles.admin), UserController.destroy);

export default routes;
