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

  async show(req, res) {
    try {
      const { id } = req.params;

      const programmer = await ProgrammerSchema.findById(id);

      return res.status(200).json(new Response(200, 'successo', programmer));
    } catch (err) {
      if (err.name === 'CastError') {
        return res
          .status(404)
          .json(new Response(404, 'recurso não encontrado', null));
      }
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

  async update(req, res) {
    try {
      const { id } = req.params;

      const programmer = await ProgrammerSchema.findOneAndUpdate(
        { _id: id },
        req.body,
        {
          new: true,
        }
      );

      return res.status(201).json(new Response(201, 'sucesso', programmer));
    } catch (err) {
      if (err.name === 'CastError') {
        return res
          .status(400)
          .json(new Response(400, 'recurso não encontrado', null));
      }
      return res.status(500).json(new Response(500, 'erro', null));
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;

      await ProgrammerSchema.findByIdAndDelete({ _id: id });

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

export default new ProgrammerController();
