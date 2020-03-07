import Response from './../models/Response';
import UserSchema from './../models/User';

class UserController {
  async index(req, res) {
    try {
      const users = await UserSchema.find();

      return res.status(200).json(new Response(200, 'sucesso', users));
    } catch (err) {
      return res.status(500).json(new Response(500, 'erro', null));
    }
  }

  async store(req, res) {
    try {
      const { nome, email, senha } = req.body;

      const userExists = await UserSchema.findOne({ email });
      if (userExists) {
        return res
          .status(400)
          .json(new Response(400, 'email já está sendo utilizado', null));
      }

      const user = await UserSchema.create({ nome, email, senha });

      return res.status(201).json(new Response(201, 'sucesso', user));
    } catch (err) {
      if (err.name === 'ValidationError') {
        return res
          .status(400)
          .json(new Response(400, 'Dados incorretos informados', null));
      }
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;

      await UserSchema.deleteOne({ _id: id });
      return res.status(200).json(new Response(200, 'sucesso', null));
    } catch (err) {
      if (err.name === 'CastError') {
        return res
          .status(400)
          .json(new Response(400, 'recurso não encontrado', null));
      }
      return res.status(500).json(new Response(500, 'erro', null));
    }
  }
}

export default new UserController();
