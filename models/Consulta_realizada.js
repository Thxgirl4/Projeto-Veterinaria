import mongoose from 'mongoose';

const consultaRealizadaSchema = new mongoose.Schema({
    data: {
        type: Date,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
        trim: true,
    },
    veterinario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Veterinario', // Referência ao modelo Veterinario
        required: true,
    },
    paciente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente', // Referência ao modelo Paciente
        required: true,
    },
    observacoes: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true // Adiciona campos de createdAt e updatedAt
});

const Consulta_realizada = mongoose.model('Consulta_realizada', consultaRealizadaSchema);

export default Consulta_realizada;