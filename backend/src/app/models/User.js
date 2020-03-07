import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'USER',
    enum: ['USER', 'ADMIN'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.pre('save', async function(next) {
  if (!this.isModified('senha')) {
    return next();
  }

  this.senha = await bcrypt.hash(this.senha, 8);
});

UserSchema.methods = {
  checkPassword(senha) {
    return bcrypt.compare(senha, this.senha);
  },
};

export default mongoose.model('UserSchema', UserSchema);
