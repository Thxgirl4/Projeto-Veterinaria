import mongoose from 'mongoose';

const animaisSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    codAnimal: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    idade: {
        type: Number,
        required: true,
        min: 0 // Idade não pode ser negativa
    },
    especie: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true // Adiciona campos de createdAt e updatedAt
});

const Animais = mongoose.model('Animais', animaisSchema);

export default Animais;