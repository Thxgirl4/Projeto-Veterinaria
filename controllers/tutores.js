import Tutores from "../models/Tutores.js";

export async function telaaddtutores(req, res) {
    res.render('Tutores/add')
}
    
export async function addtutores(req,res){
   try { const tutores = new Tutores({
        nome: req.body.nome,
        cpf: req.body.cpf,
        endereco: req.body.endereco,
        celular: req.body.celular,
        codAnimal: req.body.codAnimal,
        nomeAnimal: req.body.nomeAnimal
    })
    await tutores.save();
    res.send("Tutor Cadastrado com sucesso!")
    
    } catch(err){
        console.error(error);
        res.status(500).send("Erro ao cadastrar.");
    }
}
export async function listtutores(req,res){
    
}

export async function filtrtutores(req,res){
    
}

export async function telaedttutores(req,res){
    
}

export async function edttutores(req,res){
    
}

export async function delettutores(req,res){
    
}