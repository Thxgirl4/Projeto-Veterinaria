import Atendente from "../models/Atendente.js";

export async function telaaddatendente(req, res) {
    res.render('Atendente/add')
}
    
export async function addatendente(req,res){
   try { const atendente = new Atendente({
        codAtendente: req.body.codAtendente,
        nome: req.body.nome,
        cpf: req.body.cpf,
        celular: req.body.celular,
        email: req.body.email,
        endereco: req.body.endereco
    })
    await atendente.save();
    res.send("Atendente Cadastrado com sucesso!")
    
    } catch(err){
        console.error(error);
        res.status(500).send("Erro ao cadastrar.");
    }
}
export async function listatendente(req,res){
    
}

export async function filtratendente(req,res){
    
}

export async function telaedtatendente(req,res){
    
}

export async function edtatendente(req,res){
    
}

export async function deletatendente(req,res){
    
}