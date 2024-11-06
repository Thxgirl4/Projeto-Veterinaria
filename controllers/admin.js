import Usuario from "../models/Usuario.js";

export async function telaaddusuario(req,res){
    res.render('usuario/add')
}

export async function addusuario(req,res){
   try{ const usuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        foto: req.body.foto
    })
    await usuario.save();
    res.send("Usuario Cadastrado com sucesso!")
} catch(err){
    console.error(error);
    res.status(500).send("Erro ao cadastrar.");
}
}

