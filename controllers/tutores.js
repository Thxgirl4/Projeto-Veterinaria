import tutores from "..models/tutores.js";

export async function telaaddtutores(req, res) {
    res.render('tutores/add')
}
    
export async function addtutores(req,res){
    const usuario = new tutores({
        nome: req.body.nome,
        cpf: req.body.cpf,
        endereco: req.body.endereco,
        celular: req.body.celular,
        codAnimal: req.body.codAnimal,
        nomeAnimal: req.body.nomeAnimal
    })
    await tutores.save();
    res.send("Tutor Cadastrado com sucesso!")
}
export async function listtutores(req,res){
    
}

export async function filtrtutores(req,res){
    
}

export async function telaedttutores(req,res){
    
}

export async function edttutores(req,res){
    
}

export async function delettutores(req,res){
    
}