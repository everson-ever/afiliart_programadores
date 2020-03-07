import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import Response from './../models/Response';
import authConfig from './../utils/authConfig';

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json(new Response(401, 'token não fornecido', null));
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secretKey);

    req.userId = decoded._id;
    req.userName = decoded.nome;
    req.userRole = decoded.role;

    next();
  } catch (err) {
    return res.status(401).json(new Response(401, 'token inválido', null));
  }
};

export default auth;
