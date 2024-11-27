import Consulta_realizada from "../models/Consulta_realizada.js";

export async function telaaddconsultrealiz(req, res) {
    res.render('consulta-realizada/add');
}

export async function addconsultrealiz(req, res) {
    try {
        const consultaRealizada = new Consulta_realizada(req.body);
        await consultaRealizada.save();
        res.status(201).json({ message: "Consulta realizada cadastrada com sucesso!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao cadastrar consulta realizada." });
    }
}

export async function listconsultrealiz(req, res) {
    try {
        const consultasRealizadas = await Consulta_realizada.find({});
        res.render('consulta-realizada/lst', { consultasRealizadas });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao listar consultas realizadas.");
    }
}

export async function filtrconsultrealiz(req, res) {
    try {
        const consultasRealizadas = await Consulta_realizada.find({ descricao: new RegExp(req.body.pesquisar, "i") });
        res.render('consulta-realizada/lst', { consultasRealizadas });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao filtrar consultas realizadas.");
    }
}

export async function telaedtconsultrealiz(req, res) {
    try {
        const consultaRealizada = await Consulta_realizada.findById(req.params.id);
        res.render('consulta-realizada/edt', { consultaRealizada });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao obter consulta realizada para edição.");
    }
}

export async function edtconsultrealiz(req, res) {
    try {
        await Consulta_realizada.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/consulta-realizada/list');
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao editar consulta realizada.");
    }
}

export async function deletconsultrealiz(req, res) {
    try {
        await Consulta_realizada.findByIdAndDelete(req.params.id);
        res.redirect('/consulta-realizada/list');
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao deletar consulta realizada.");
    }
}