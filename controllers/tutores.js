import Tutores from "../models/Tutores.js";

export async function telaaddtutores(req, res) {
    res.render('Tutores/add')
}
    
export async function addtutores(req,res){
   try { const tutores = new Tutores({
        nome: req.body.nome,
        cpf: req.body.cpf,
        endereco: req.body.endereco,
        celular: req.body.celular,
        codAnimal: req.body.codAnimal,
        nomeAnimal: req.body.nomeAnimal
    })
    await tutores.save();
    res.send("Tutor Cadastrado com sucesso!")
    
    } catch(err){
        console.error(error);
        res.status(500).send("Erro ao cadastrar.");
    }
}
// Lista todos os tutores cadastrados
export async function listtutores(req, res) {
    try {
        const tutores = await Tutores.find({});
        res.render('Tutores/lst', { tutores });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao listar tutores.");
    }
}

// Filtra tutores com base em um critério de pesquisa
export async function filtrtutores(req, res) {
    try {
        const tutores = await Tutores.find({ nome: new RegExp(req.body.pesquisar, "i") });
        res.render('Tutores/lst', { tutores });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao filtrar tutores.");
    }
}

// Renderiza a tela para editar um tutor
export async function telaedttutores(req, res) {
    try {
        const tutor = await Tutores.findById(req.params.id);
        res.render('Tutores/edt', { tutor });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao obter tutor para edição.");
    }
}

// Edita um tutor existente
export async function edttutores(req, res) {
    try {
        await Tutores.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/tutores/lst');
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao editar tutor.");
    }
}

// Deleta um tutor existente
export async function delettutores(req, res) {
    try {
        await Tutores.findByIdAndDelete(req.params.id);
        res.redirect('/tutores/lst');
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao deletar tutor.");
    }
};