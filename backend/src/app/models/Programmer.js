import mongoose from 'mongoose';

const ProgrammerSchema = new mongoose.Schema({
	nome: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	telefone: {
		type: String,
		required: true
	},
	linkedin: {
		type: String,
		required: true
	},
	cidade: {
		type: String,
		required: true
	},
	estado: {
		type: String,
		required: true
	},
	turno: {
		type: String,
		enum: [ 'Manhã', 'Tarde', 'Noite' ],
		required: true
	},
	habilidades: {
		nodejs: {
			type: Number,
			required: true,
			min: 0,
			max: 5,
			default: 0
		},
		angular: {
			type: Number,
			required: true,
			min: 0,
			max: 5,
			default: 0
		},
		html: {
			type: Number,
			required: true,
			min: 0,
			max: 5,
			default: 0
		},
		css: {
			type: Number,
			required: true,
			min: 0,
			max: 5,
			default: 0
		},
		bancoDados: {
			type: Number,
			required: true,
			min: 0,
			max: 5,
			default: 0
		}
	}
});

export default mongoose.model('ProgrammerSchema', ProgrammerSchema);
