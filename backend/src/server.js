import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class App {
	constructor() {
		this.express = express();

		this.middlewares();
		this.database();
		this.routes();
	}

	middlewares() {
		this.express.use(cors());
		this.express.use(express.json());
	}

	database() {
		mongoose.connect(
			'mongodb+srv://everson:UOGmwFRLpJPztoeT@cluster0-qcdjs.mongodb.net/afiliart?retryWrites=true&w=majority',
			{
				useUnifiedTopology: true,
				useNewUrlParser: true,
				useFindAndModify: false
			}
		);
	}

	routes() {
		this.express.use('/api', routes);
	}
}

export default new App().express;
