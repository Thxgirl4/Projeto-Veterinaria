import conexao from '../config/conexao.js'

const Usuario = conexao.Schema({
    email: {type:String, required:true, unique:true},
    senha: {type:String, required:true},
    
})

export default conexao.model('Usuario',Usuario)
