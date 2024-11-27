import mongoose from 'mongoose';

const consultaSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true,
        trim: true
    },
    data: {
        type: Date,
        required: true,
        default: Date.now // Define a data atual como padrão
    },
    paciente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente', // Referência ao modelo Paciente
        required: true
    },
    veterinario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Veterinario', // Referência ao modelo Veterinario
        required: true
    },
    observacoes: {
        type: String,
        trim: true
    }
}, {
    timestamps: true // Adiciona campos de createdAt e updatedAt
});

const Consulta = mongoose.model('Consulta', consultaSchema);

export default Consulta;