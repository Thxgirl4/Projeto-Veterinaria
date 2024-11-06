import Animais from "../models/Animais.js";

export async function telaaddanimais(req, res) {
    res.render('Animais/add')
}
    
export async function addanimais(req, res) {
    try {
        const animais = new Animais({ 
            nome: req.body.nome,
            codAnimal: req.body.codAnimal,
            idade: req.body.idade,
            especie: req.body.especie
        });

        await animais.save();
        res.status(201).send("Animal cadastrado com sucesso!");

    } catch (error) {
        console.error(error); // Log do erro no console para depuração
        res.status(500).send("Erro ao cadastrar."); // Resposta ao cliente em caso de erro
    }
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