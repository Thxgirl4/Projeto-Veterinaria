import mongoose from 'mongoose';

const atendenteSchema = new mongoose.Schema({
    codAtendente: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
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
    celular: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /\d{10,11}/.test(v); // Valida se o celular tem 10 ou 11 dígitos
            },
            message: props => `${props.value} não é um número de celular válido!`
        }
    }
    });
