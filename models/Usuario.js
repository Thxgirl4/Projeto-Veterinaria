const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type:String,
            required: true,
    },
    senha: { type: String,
             required: true,
    }
});

const User = mongoose.model('User', userSchema);

const novoUsuario = new User({
    nome: 'Maicon',
    senha: 'romero90'
}) 
novoUsuario.save()
.then(() => console.log('Usuario criado com sucesso'))
.catch(err => console.error('Erro ao salvar usuario', err));