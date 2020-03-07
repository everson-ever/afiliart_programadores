import Response from './../models/Response';

const permission = (roles = []) => {
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return [
    (req, res, next) => {
      if (roles.length && !roles.includes(req.userRole)) {
        return res
          .status(401)
          .json(new Response(401, 'não autorizado a acessar a rota', null));
      }
      next();
    },
  ];
};

export default permission;
