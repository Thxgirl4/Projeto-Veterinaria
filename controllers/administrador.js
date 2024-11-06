import Administrador from "../models/Administrador.js";

export async function telaaddadm(req, res) {
    res.render('adm/add')
}
    
export async function addadm(req,res){
   try { const administrador = new Administrador({
        codAdm: req.body.codAdm,
        nome: req.body.nome,
        cpf: req.body.cpf,
        crea: req.body.crea,
        celular: req.body.celular,
        email: req.body.email,
        endereco: req.body.endereco
    })
    await administrador.save();
    res.send("Administrador Cadastrado com sucesso!")
    
    } catch(err){
        console.error(error);
        res.status(500).send("Erro ao cadastrar.");
    }
}
export async function listadm(req,res){
    
}

export async function filtradm(req,res){
    
}

export async function telaedtadm(req,res){
    
}

export async function edtadm(req,res){
    
}

export async function deletadm(req,res){
    
}