import consulta from "../models/Consulta.js";

export async function telaaddconsulta(req, res) {
    res.render('consulta/add');
}

export async function addconsulta(req, res) {
    try {
        const consulta = new Consulta(req.body);
        await consulta.save();
        res.status(201).json({ message: "Consulta cadastrada com sucesso!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao cadastrar consulta." });
    }}

export async function listconsulta(req, res) {
    try {
        const consultas = await Consulta.find({});
        res.render('consulta/lst', { consultas });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao listar consultas.");
    }}

export async function filtrconsulta(req, res) {
    try {
        const consultas = await Consulta.find({ descricao: new RegExp(req.body.pesquisar, "i") });
        res.render('consulta/lst', { consultas });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao filtrar consultas.");
    }}

export async function telaedtconsulta(req, res) {
    try {
        const consulta = await Consulta.findById(req.params.id);
        res.render('consulta/edt', { consulta });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao obter consulta para edição.");
    }}

export async function edtconsulta(req, res) {
    try {
        await Consulta.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/consulta/lst');
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao editar consulta.");
    }}

export async function deletconsulta(req, res) {
    try {
        await Consulta.findByIdAndDelete(req.params.id);
        res.redirect('/consulta/lst');
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao deletar consulta.");
    }}