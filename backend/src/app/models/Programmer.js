import mongoose from 'mongoose';

const ProgrammerSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telefone: {
    type: Number,
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },
  cidade: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  turno: {
    type: String,
    enum: ['Manhã', 'Tarde', 'Noite'],
    required: true,
  },
});

export default mongoose.model('ProgrammerSchema', ProgrammerSchema);
