import mongoose from 'mongoose';

const receitaSchema = new mongoose.Schema({
    codAnimal: {
        type: String,
        required: true,
        trim: true
    },
    nomeAnimal: {
        type: String,
        required: true,
        trim: true
    },
    medicamentosPresc: {
        type: [String], // Array de strings para armazenar os medicamentos prescritos
        required: true
    },
    dosagem: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true // Adiciona campos de createdAt e updatedAt
});

const Receita = mongoose.model('Receita', receitaSchema);

export default Receita;