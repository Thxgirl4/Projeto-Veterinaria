import Receita from "../models/Receita.js";

export async function telaaddreceita(req, res) {
    res.render('Receita/add')
}
    
export async function addreceita(req,res){
   try { const receita = new Receita({
        codAnimal: req.body.codAnimal,
        nomeAnimal: req.body.nomeAnimal,
        medicamentosPresc: req.body.medicamentosPresc,
        dosagem: req.body.dosagem        
    })
    await receita.save();
    res.send("Receita Cadastrada com sucesso!")
    
    } catch(err){
        console.error(error);
        res.status(500).send("Erro ao cadastrar.");
    }
}
export async function listreceita(req,res){
    
}

export async function filtrreceita(req,res){
    
}

export async function telaedtreceita(req,res){
    
}

export async function edtreceita(req,res){
    
}

export async function deletreceita(req,res){
    
}