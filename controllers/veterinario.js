import Veterinario from "../models/Veterinario.js";

export async function telaaddvet(req, res) {
    res.render('vet/add')
}
    
export async function addvet(req,res){
   try { 
        const veterinario = new Veterinario({
        codVet: req.body.codVet,
        nome: req.body.nome,
        cpf: req.body.cpf,
        crv: req.body.crv,
        celular: req.body.celular,
        email: req.body.email,
        endereco: req.body.endereco
    })
    await veterinario.save();
    res.send("Veterinario Cadastrado com sucesso!")
    
    } catch(err){
        console.error(error);
        res.status(500).send("Erro ao cadastrar.");
    }
}
export async function listvet(req,res){
    
}

export async function filtrvet(req,res){
    
}

export async function telaedtvet(req,res){
    
}

export async function edtvet(req,res){
    
}

export async function deletvet(req,res){
    
}