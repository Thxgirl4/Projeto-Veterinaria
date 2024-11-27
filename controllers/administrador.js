import Administrador from "../models/Administrador.js";

export async function telaaddadm(req, res) {
    res.render('colaborador-adm/add');
}

export async function addadm(req, res) {
    try {
        const administrador = new Administrador({
            codAdm: req.body.codAdm,
            nome: req.body.nome,
            cpf: req.body.cpf,
            crea: req.body.crea,
            celular: req.body.celular,
            email: req.body.email,
            endereco: req.body.endereco
        });
        await administrador.save();
        res.status(201).json({ message: "Administrador cadastrado com sucesso!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao cadastrar administrador." });
    }
}

export async function listadm(req, res) {
    try {
        const administradores = await Administrador.find({});
        res.render('admin/colaborador-adm/lst', { Administradores: administradores });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao listar administradores.");
    }
}

export async function filtradm(req, res) {
    try {
        const administradores = await Administrador.find({ nome: new RegExp(req.body.pesquisar, "i") });
        res.render('admin/colaborador-adm/lst', { Administradores: administradores });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao filtrar administradores.");
    }
}

export async function telaedtadm(req, res) {
    try {
        const administrador = await Administrador.findById(req.params.id);
        res.render('colaborador-adm/edt', { administrador });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao obter administrador para edição.");
    }
}

export async function edtadm(req, res) {
    try {
        await Administrador.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/colaborador-adm/lst');
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao editar administrador.");
    }
}

export async function deletadm(req, res) {
    try {
        await Administrador.findByIdAndDelete(req.params.id);
        res.redirect('/colaborador-adm/lst');
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao deletar administrador.");
    }}