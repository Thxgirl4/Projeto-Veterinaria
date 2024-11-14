import conexao from '../config/conexao.js'

const Veterinario = conexao.Schema({
    email: {type:String, required:true, unique:true},
    nome: {type:String, required:true},
    cpf: {type:String, required:true},
    crv: {type:Int16Array, required:true}, //CRV
    celular: {type:String, required:true},
    endereço: {type:String, required:true}

})

export default conexao.model('Veterinario', Veterinario)