import Response from './../models/Response';
import UserSchema from './../models/User';

class UserController {
	async index(req, res) {
		const users = await UserSchema.find();

		return res.status(200).json(new Response(200, 'sucesso', users));
	}

	async store(req, res) {
		try {
			const { nome, email, senha } = req.body;

			const user = await UserSchema.create({ nome, email, senha });

			return res.status(201).json(new Response(201, 'sucesso', user));
		} catch (err) {
			if (err.name === 'ValidationError') {
				return res.status(400).json(new Response(400, 'Dados incorretos informados', null));
			}
		}
	}
}

export default new UserController();
