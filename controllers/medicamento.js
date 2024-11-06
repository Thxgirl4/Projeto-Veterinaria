import medicamento from "..models/medicamento.js";

export async function telaaddmedicamento(req, res) {
    res.render('medicamento/add')
}
    
export async function addmedicamento(req,res){
    const medicamento = new medicamento({
        nomeMedic: req.body.nomeMedic,
        fabricante: req.body.fabricante,
        loteFabric: req.body.loteFabric,
        validade: req.body.validade,
        descriMedic: req.body.descriMedic
        
    })
    await medicamento.save();
    res.send("Medicação salva com sucesso!")
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