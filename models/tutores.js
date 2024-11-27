import mongoose from 'mongoose';

const tutoresSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true, // CPF deve ser único
        trim: true
    },
    endereco: {
        type: String,
        required: true,
        trim: true
    },
    celular: {
        type: String,
        required: true,
        trim: true
    },
    codAnimal: {
        type: String,
        required: true,
        trim: true
    },
    nomeAnimal: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true // Adiciona campos de createdAt e updatedAt
});

const Tutores = mongoose.model('Tutores', tutoresSchema);

export default Tutores;