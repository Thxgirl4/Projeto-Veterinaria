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
export async function listmedicamento(req,res){
    
}

export async function filtrmedicamento(req,res){
    
}

export async function telaedtmedicamento(req,res){
    
}

export async function edtmedicamento(req,res){
    
}

export async function deletmedicamento(req,res){
    
}