import animais from "..models/animais.js";

export async function telaaddanimais(req, res) {
    res.render('usuario/add')
}
    
export async function addanimais(req,res){
    const usuario = new animais({
        nome: req.body.nome,
        sexo: req.body.sexo,
        idade: req.body.idade,
        codEspecie: req.body.codEspecie,
        raca: req.body.raca,

    })
    await animais.save();
    res.send("Animal Cadastrado com sucesso!")
}
export async function listanimais(req,res){
    
}

export async function filtranimais(req,res){
    
}

export async function telaedtanimais(req,res){
    
}

export async function edtanimais(req,res){
    
}

export async function deletanimais(req,res){
    
}