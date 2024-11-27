import Atendente from "../models/Atendente.js";

// Renderiza a tela para adicionar um novo atendente
export async function telaaddatendente(req, res) {
    res.render('Atendente/add');
}

// Adiciona um novo atendente ao banco de dados
export async function addatendente(req, res) {
    try {
        const atendente = new Atendente({
            codAtendente: req.body.codAtendente,
            nome: req.body.nome,
            cpf: req.body.cpf,
            celular: req.body.celular,
            email: req.body.email,
            endereco: req.body.endereco
        });
        await atendente.save();
        res.status(201).send("Atendente cadastrado com sucesso!");
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro ao cadastrar.");
    }
}

// Lista todos os atendentes cadastrados
export async function listatendente(req, res) {
    try {
        const atendentes = await Atendente.find({});
        res.render('admin/colaborador-vet/lst', { atendentes });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao listar atendentes.");
    }
}

// Filtra atendentes com base em um critério de pesquisa
export async function filtratendente(req, res) {
    try {
        const atendentes = await Atendente.find({ nome: new RegExp(req.body.pesquisar, "i") });
        res.render('admin/colaborador-vet/lst', { atendentes });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao filtrar atendentes.");
    }
}

// Renderiza a tela para editar um atendente
export async function telaedtatendente(req, res) {
    try {
        const atendente = await Atendente.findById(req.params.id);
        res.render('Atendente/edit', { atendente });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao obter atendente para edição.");
    }
}

// Edita um atendente existente
export async function edtatendente(req, res) {
    try {
        await Atendente.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/atendente/list');
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao editar atendente.");
    }
}

// Deleta um atendente existente
export async function deletatendente(req, res) {
    try {
        await Atendente.findByIdAndDelete(req.params.id);
        res.redirect('/atendente/list');
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao deletar atendente.");
    }
}
