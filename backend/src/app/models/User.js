import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	nome: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	senha: {
		type: String,
		required: true
	},
	role: {
		type: String,
		default: 'USER',
		enum: [ 'USER', 'ADMIN' ]
	},
	createdAt: {
		type: Date,
		default: Date.now()
	}
});

export default mongoose.model('UserSchema', UserSchema);
