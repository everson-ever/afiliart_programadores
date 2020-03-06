import ProgrammerSchema from '../models/Programmer';
import Response from '../models/Response';

class ProgrammerController {
  async index(req, res) {
    try {
      const programmers = await ProgrammerSchema.find();

      res.status(200).json(new Response(200, 'successo', programmers));
    } catch (err) {
      res.status(500).json(new Response(500, 'erro', null));
    }
  }
}

export default new ProgrammerController();
