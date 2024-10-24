import conexao from "../config/conexao.js"

const Usuario = conexao.Schema({
    nome: {type:String, required:true},
    senha: {type:String, required:true},

    
})
export default conexao.model('Usuario', Usuario)