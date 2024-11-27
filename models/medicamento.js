import mongoose from 'mongoose';

const medicamentoSchema = new mongoose.Schema({
    nomeMedic: {
        type: String,
        required: true,
        trim: true
    },
    fabricante: {
        type: String,
        required: true,
        trim: true
    },
    loteFabric: {
        type: String,
        required: true,
        trim: true
    },
    validade: {
        type: Date,
        required: true
    },
    descriMedic: {
        type: String,
        trim: true
    }
}, {
    timestamps: true // Adiciona campos de createdAt e updatedAt
});

const Medicamento = mongoose.model('Medicamento', medicamentoSchema);

export default Medicamento;