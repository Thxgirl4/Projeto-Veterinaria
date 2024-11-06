import consulta_realizada from "..models/consulta_realizada.js";

export async function telaaddconsultrealiz(req, res) {
    res.render('consulta_realizada/add')
}
    
export async function addconsultrealiz(req,res){
    const usuario = new consulta_realizada({
        codAnimal: req.body.codAnimal,
        especie: req.body.especie,
        diagnostico: req.body.diagnostico,
        dataRetorno: req.body.dataRetorno,
        tratamento: req.body.tratamento,
        observacoes: req.body.observacoes
    })
    await consulta_realizada.save();
    res.send("Consulta realizada salva com sucesso!")
}
export async function listconsultrealiz(req,res){
    
}

export async function filtrconsultrealiz(req,res){
    
}

export async function telaedtconsultrealiz(req,res){
    
}

export async function edtconsultrealiz(req,res){
    
}

export async function deletconsultrealiz(req,res){
    
}