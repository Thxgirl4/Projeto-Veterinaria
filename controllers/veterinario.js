import Veterinario from "../models/Veterinario.js";

export async function telaaddvet(req, res) {
    res.render('vet/add')
}
    
export async function addvet(req,res){
   try { 
        const veterinario = new Veterinario({
        codVet: req.body.codVet,
        nome: req.body.nome,
        cpf: req.body.cpf,
        crv: req.body.crv,
        celular: req.body.celular,
        email: req.body.email,
        endereco: req.body.endereco
    })
    await veterinario.save();
    res.send("Veterinario Cadastrado com sucesso!")
    
    } catch(err){
        console.error(error);
        res.status(500).send("Erro ao cadastrar.");
    }
}
export async function listvet(req,res){
    try {
        const veterinario = await Veterinario.find({});
        res.render('admin/colaborador-vet/lst', { Veterinario: veterinario });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao listar veterinario.");
    }
    
}

export async function filtrvet(req,res){
    try {
        const veterinario = await Veterinario.find({ nome: new RegExp(req.body.pesquisar, "i") });
        res.render('admin/colaborador-vet/lst', { Veterinario: veterinario });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao filtrar veterinarios.");
    }
    
}

export async function telaedtvet(req,res){
    try {
        const veterinario = await Veterinario.findById(req.params.id);
        res.render('colaborador-vet/edt', { veterinario });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao obter veterinario para edição.");
    }
    
}

export async function edtvet(req,res){
    try {
        await Veterinario.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/colaborador-vet/lst');
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao editar veterinario.");
    }
    
}

export async function deletvet(req,res){
    try {
        await Veterinario.findByIdAndDelete(req.params.id);
        res.redirect('/colaborador-vet/lst');
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao deletar veterinario.");
    }
    
}