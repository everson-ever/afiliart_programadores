import ProgrammerSchema from '../models/Programmer';
import Response from '../models/Response';

class ProgrammerController {
  async index(req, res) {
    try {
      const programmers = await ProgrammerSchema.find();

      return res.status(200).json(new Response(200, 'successo', programmers));
    } catch (err) {
      return res.status(500).json(new Response(500, 'erro', null));
    }
  }

  async store(req, res) {
    try {
      const programmer = await ProgrammerSchema.create(req.body);

      return res.status(200).json(new Response(201, 'sucesso', programmer));
    } catch (err) {
      if (err.name === 'ValidationError') {
        return res
          .status(400)
          .json(new Response(400, 'Dados incorretos informados', null));
      }

      return res.status(500).json(new Response(500, 'erro', null));
    }
  }
}

export default new ProgrammerController();
