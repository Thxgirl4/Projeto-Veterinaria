import Receita from "../models/Receita.js";

export async function telaaddreceita(req, res) {
    res.render('Receita/add')
}
    
export async function addreceita(req,res){
   try { const receita = new Receita({
        codAnimal: req.body.codAnimal,
        nomeAnimal: req.body.nomeAnimal,
        medicamentosPresc: req.body.medicamentosPresc,
        dosagem: req.body.dosagem        
    })
    await receita.save();
    res.send("Receita Cadastrada com sucesso!")
    
    } catch(err){
        console.error(error);
        res.status(500).send("Erro ao cadastrar.");
    }
}
// Filtra receitas com base em um critério de pesquisa
export async function filtrreceita(req, res) {
    try {
        const receitas = await Receita.find({ nomeAnimal: new RegExp(req.body.pesquisar, "i") });
        res.render('Receita/lst', { receitas });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao filtrar receitas.");
    }
}

// Renderiza a tela para editar uma receita
export async function telaedtreceita(req, res) {
    try {
        const receita = await Receita.findById(req.params.id);
        res.render('Receita/edt', { receita });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao obter receita para edição.");
    }
}

// Edita uma receita existente
export async function edtreceita(req, res) {
    try {
        await Receita.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/receita/lst');
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao editar receita.");
    }
}

// Deleta uma receita existente
export async function deletreceita(req, res) {
    try {
        await Receita.findByIdAndDelete(req.params.id);
        res.redirect('/receita/lst');
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao deletar receita.");
    }
}