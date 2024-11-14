import express from 'express';
const router = express.Router();

import {
   telaaddusuario,
   addusuario,
} from '../controllers/admin.js'

import {
   telaaddanimais,
   addanimais,
   listanimais,
   filtranimais,
   telaedtanimais,
   edtanimais,
   deletanimais,
}  from '../controllers/animais.js'

import{
    telaaddtutores,
   addtutores,
   listtutores,
   filtrtutores,
   telaedttutores,
   edttutores,
   delettutores,
}  from '../controllers/tutores.js'

import{
    telaaddconsulta,
    addconsulta,
    listconsulta,
    filtrconsulta,
    telaedtconsulta,
    edtconsulta,
    deletconsulta
} from '../controllers/consulta.js'

import {
    telaaddconsultrealiz,
    addconsultrealiz,
    listconsultrealiz,
    filtrconsultrealiz,
    telaedtconsultrealiz,
    edtconsultrealiz,
    deletconsultrealiz

} from '../controllers/consulta_realizada.js'

import {
    telaaddmedicamento,
    addmedicamento,
    listmedicamento,
    filtrmedicamento,
    telaedtmedicamento,
    edtmedicamento,
    deletmedicamento
} from '../controllers/medicamento.js'

import
{
    telaaddreceita,
    addreceita,
    listreceita,
    filtrreceita,
    telaedtreceita,
    edtreceita,
    deletreceita
} from '../controllers/receita.js'

import {
    telaaddatendente,
    addatendente,
    listatendente,
    filtratendente,
    telaedtatendente,
    edtatendente,
    deletatendente
    } from '../controllers/atendente.js'

import {
    telaaddadm,
    addadm,
    listadm,
    filtradm,
    telaedtadm,
    edtadm,
    deletadm
} from '../controllers/administrador.js'
 
import {
    telaaddvet,
    addvet,
    listvet,
    filtrvet,
    telaedtvet,
    edtvet,
    deletvet
} from '../controllers/veterinario.js'

//rotas usuario
router.get('admin/usuario/add', telaaddusuario)
router.post('admin/usuario/add', addusuario)

//rotas de animais agrupadas
router.route('/animais/add')
    .get(telaaddanimais)
    .post(addanimais);

router.route('/animais/lst')
    .get(listanimais)
    .post(filtranimais);

router.route('/animais/edt/:id')
    .get(telaedtanimais)
    .post(edtanimais);

router.get('/animais/del/:id', deletanimais);

//rotas de tutores
router.get('/tutores/add', telaaddtutores )
router.post('/tutores/add', addtutores)
router.get('/tutores/lst', listtutores)
router.post('/tutores/lst', filtrtutores)
router.get('/tutores/edt/:id', telaedttutores)
router.post('/tutores/edt/:id', edttutores)
router.get('/tutores/del/:id', delettutores)

//rotas de consulta
router.get('/consulta/add', telaaddconsulta )
router.post('/consulta/add', addconsulta)
router.get('/consulta/lst', listconsulta)
router.post('/consulta/lst', filtrconsulta)
router.get('/consulta/edt/:id', telaedtconsulta)
router.post('/consulta/edt/:id', edtconsulta)
router.get('/consulta/del/:id', deletconsulta)

//rotas de consultas-realizadas
router.get('/consulta-realizada/add', telaaddconsultrealiz )
router.post('/consulta-realizada/add', addconsultrealiz)
router.get('/consulta-realizada/list', listconsultrealiz)
router.post('/consulta-realizada/list', filtrconsultrealiz)
router.get('/consulta-realizada/edt/:id', telaedtconsultrealiz)
router.post('/consulta-realizada/edt/:id', edtconsultrealiz)
router.get('/consulta-realizada/del/:id', deletconsultrealiz)

//rotas de medicamentos
router.get('/medicamento/add', telaaddmedicamento )
router.post('/medicamento/add', addmedicamento)
router.get('/medicamento/lst', listmedicamento)
router.post('/medicamento/lst', filtrmedicamento)
router.get('/medicamento/edt/:id', telaedtmedicamento)
router.post('/medicamento/edt/:id', edtmedicamento)
router.get('/medicamento/del/:id', deletmedicamento)

//rotas de receitas
router.get('/receitas/add', telaaddreceita )
router.post('/receitas/add', addreceita)
router.get(' /receita/lst', listreceita)
router.post(' /receita/lst', filtrreceita)
router.get(' /receita/edt/:id', telaedtreceita)
router.post('/receita/edt/:id', edtreceita)
router.get('/receita/del/:id', deletreceita)

//rotas colaboradores
//atendente
router.get('/colaborador-atendente/add', telaaddatendente )
router.post('/colaborador-atendente/add', addatendente)
router.get('/colaborador-atendente/lst', listatendente)
router.post('/colaborador-atendente/lst', filtratendente)
router.get('/colaborador-atendente/edt/:id', telaedtatendente)
router.post('/colaborador-atendente/edt/:id', edtatendente)
router.get('/colaborador-atendente/del/:id', deletatendente) 

//administrador
router.get('/colaborador-adm/add', telaaddadm )
router.post('/colaborador-adm/add', addadm)
router.get('/colaborador-adm/lst', listadm)
router.post('/colaborador-adm/lst', filtradm)
router.get('/colaborador-adm/edt/:id', telaedtadm)
router.post('/colaborador-adm/edt/:id', edtadm)
router.get('/colaborador-adm/del/:id', deletadm)

//veterinario
router.get('/colaborador-vet/add', telaaddvet )
router.post('/colaborador-vet/add', addvet)
router.get('/colaborador-vet/lst', listvet)
router.post('/colaborador-vet/lst', filtrvet)
router.get('/colaborador-vet/edt/:id', telaedtvet)
router.post('/colaborador-vet/edt/:id', edtvet)
router.get('/colaborador-vet/del/:id', deletvet)

