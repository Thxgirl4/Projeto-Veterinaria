import mongoose from 'mongoose';

const veterinarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /\d{11}/.test(v); // Valida se o CPF tem 11 dígitos
            },
            message: props => `${props.value} não é um CPF válido!`
        }
    },
    registro: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    celular: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /\d{10,11}/.test(v); // Valida se o celular tem 10 ou 11 dígitos
            },
            message: props => `${props.value} não é um número de celular válido!`
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return /^\S+@\S+\.\S+$/.test(v); // Valida se o email está no formato correto
            },
            message: props => `${props.value} não é um email válido!`
        }
    },
    endereco: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true // Adiciona campos de createdAt e updatedAt
});

const Veterinario = mongoose.model('Veterinario', veterinarioSchema);

export default Veterinario;