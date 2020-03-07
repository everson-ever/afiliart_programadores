import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import authConfig from './../utils/authConfig';

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
    enum: ['USER', 'ADMIN', 'GESTOR'],
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

UserSchema.statics.generateToken = ({ _id, nome, role }) => {
  return jwt.sign({ _id, nome, role }, authConfig.secretKey, {
    expiresIn: authConfig.expiresIn,
  });
};

UserSchema.methods = {
  checkPassword(senha) {
    return bcrypt.compare(senha, this.senha);
  },
};

export default mongoose.model('UserSchema', UserSchema);
