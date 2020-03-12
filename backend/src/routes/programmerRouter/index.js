import { Router } from 'express';
import ProgrammerController from '../../app/controllers/ProgrammerController';
import roles from '../../app/utils/roles';
import permission from './../../app/middlewares/permission';

const routes = Router();

routes.get('/programadores', ProgrammerController.index);
routes.get('/programadores/:id', ProgrammerController.show);
routes.post(
  '/programadores',
  permission(roles.admin),
  ProgrammerController.store
);
routes.put(
  '/programadores/:id',
  permission(roles.admin),
  ProgrammerController.update
);
routes.delete(
  '/programadores/:id',
  permission(roles.admin),
  ProgrammerController.destroy
);

export default routes;
