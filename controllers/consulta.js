import consulta from "..models/consulta.js";

export async function telaaddconsulta(req, res) {
    res.render('consulta/add')
}
    
export async function addconsulta(req,res){
    try {
        const usuario = new consulta({
        codConsulta: req.body.codConsulta,
        data: req.body.data,
        horario: req.body.horario,
        valor: req.body.valor,
    })
    await consulta.save();
    res.send("Consulta Cadastrada com sucesso!")
} catch(error) {
    console.error(error);
    res.status(500).send("Erro ao cadastrar.");

}
}
export async function listconsulta(req,res){
    
}

export async function filtrconsulta(req,res){
    
}

export async function telaedtconsulta(req,res){
    
}

export async function edtconsulta(req,res){
    
}

export async function deletconsulta(req,res){
    
}