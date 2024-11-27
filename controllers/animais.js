import Animais from "../models/Animais.js";

// Renderiza a tela para adicionar um novo animal
export async function telaaddanimais(req, res) {
    res.render('Animais/add');
}

// Adiciona um novo animal ao banco de dados
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
        console.error(error);
        res.status(500).send("Erro ao cadastrar.");
    }
}

// Lista todos os animais cadastrados
export async function listanimais(req, res) {
    try {
        const animais = await Animais.find({});
        res.render('Animais/list', { animais });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao listar animais.");
    }
}

// Filtra animais com base em um critério de pesquisa
export async function filtranimais(req, res) {
    try {
        const animais = await Animais.find({ nome: new RegExp(req.body.pesquisar, "i") });
        res.render('Animais/list', { animais });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao filtrar animais.");
    }
}

// Renderiza a tela para editar um animal
export async function telaedtanimais(req, res) {
    try {
        const animal = await Animais.findById(req.params.id);
        res.render('Animais/edit', { animal });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao obter animal para edição.");
    }
}

// Edita um animal existente
export async function edtanimais(req, res) {
    try {
        await Animais.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/animais/list');
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao editar animal.");
    }
}

// Deleta um animal existente
export async function deletanimais(req, res) {
    try {
        await Animais.findByIdAndDelete(req.params.id);
        res.redirect('/animais/list');
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao deletar animal.");
    }
}