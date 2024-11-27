import Medicamento from "../models/Medicamento.js";

export async function telaaddmedicamento(req, res) {
    res.render('Medicamento/add')
}
    
export async function addmedicamento(req, res) {
    try {
        const medicamento = new Medicamento({ 
            nomeMedic: req.body.nomeMedic,
            fabricante: req.body.fabricante,
            loteFabric: req.body.loteFabric,
            validade: req.body.validade,
            descriMedic: req.body.descriMedic
        });

        await medicamento.save();
        res.status(201).send("Medicação salva com sucesso!");
    } catch (error) {
        console.error(error); 
        res.status(500).send("Erro ao salvar a medicação."); 
    }
}
// Lista todos os medicamentos cadastrados
export async function listmedicamento(req, res) {
    try {
        const medicamentos = await Medicamento.find({});
        res.render('Medicamento/lst', { medicamentos });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao listar medicamentos.");
    }
}

// Filtra medicamentos com base em um critério de pesquisa
export async function filtrmedicamento(req, res) {
    try {
        const medicamentos = await Medicamento.find({ nomeMedic: new RegExp(req.body.pesquisar, "i") });
        res.render('Medicamento/lst', { medicamentos });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao filtrar medicamentos.");
    }
}

// Renderiza a tela para editar um medicamento
export async function telaedtmedicamento(req, res) {
    try {
        const medicamento = await Medicamento.findById(req.params.id);
        res.render('Medicamento/edt', { medicamento });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao obter medicamento para edição.");
    }
}

// Edita um medicamento existente
export async function edtmedicamento(req, res) {
    try {
        await Medicamento.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/medicamento/lst');
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao editar medicamento.");
    }
}

// Deleta um medicamento existente
export async function deletmedicamento(req, res) {
    try {
        await Medicamento.findByIdAndDelete(req.params.id);
        res.redirect('/medicamento/lst');
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao deletar medicamento.");
    }
}