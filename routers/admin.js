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
} from '../controllers/consuta.js'

import {
    telaaddconsultrealiz,
    addconsultrealiz,
    listconsultrealiz,
    filtrconsultrealiz,
    telaedtconsultrealiz,
    edtconsultrealiz,
    deletconsultrealiz

} from '../controllers/consulta-realizada,js'

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
    telaedtadm,
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

//rotas de animais
router.get('/admin/animais/add', telaaddanimais)
router.post('/admin/animais/add', addanimais)
router.get('/admin/animais/lst', listanimais)
router.post('/admin/animais/lst', filtranimais)
router.get('/admin/animais/edt/:id', telaedtanimais)
router.post('/admin/animais/edt/:id', edtanimais)
router.get('/admin/animais/del/:id', deletanimais)

//rotas de tutores
router.get('/admin/tutores/add', telaaddtutores )
router.post('/admin/tutores/add', addtutores)
router.get('/admin/tutores/lst', listtutores)
router.post('/admin/tutores/lst', filtrtutores)
router.get('/admin/tutores/edt/:id', telaedttutores)
router.post('/admin/tutores/edt/:id', edttutores)
router.get('/admin/tutores/del/:id', delettutores)

//rotas de consulta
router.get('/admin/consulta/add', telaaddconsulta )
router.post('/admin/consulta/add', addconsulta)
router.get('/admin/consulta/lst', listconsulta)
router.post('/admin/consulta/lst', filtrconsulta)
router.get('/admin/consulta/edt/:id', telaedtconsulta)
router.post('/admin/consulta/edt/:id', edtconsulta)
router.get('/admin/consulta/del/:id', deletconsulta)

//rotas de consultas-realizadas
router.get('/admin/consulta-realizada/add', telaaddconsultrealiz )
router.post('/admin/consulta-realizada/add', addconsultrealiz)
router.get('/admin/consulta-realizada/list', listconsultrealiz)
router.post('/admin/consulta-realizada/list', filtrconsultrealiz)
router.get('/admin/consulta-realizada/edt/:id', telaedtconsultrealiz)
router.post('/admin/consulta-realizada/edt/:id', edtconsultrealiz)
router.get('/admin/consulta-realizada/del/:id', deletconsultrealiz)

//rotas de medicamentos
router.get('/admin/medicamento/add', telaaddmedicamento )
router.post('/admin/medicamento/add', addmedicamento)
router.get('/admin/medicamento/lst', listmedicamento)
router.post('/admin/medicamento/lst', filtrmedicamento)
router.get('/admin/medicamento/edt/:id', telaedtmedicamento)
router.post('/admin/medicamento/edt/:id', edtmedicamento)
router.get('/admin/medicamento/del/:id', deletmedicamento)

//rotas de receitas
router.get('/admin/receitas/add', telaaddreceita )
router.post('/admin/receitas/add', addreceita)
router.get('/admin/receita/lst', listreceita)
router.post('/admin/receita/lst', filtrreceita)
router.get('/admin/receita/edt/:id', telaedtreceita)
router.post('/admin/receita/edt/:id', edtreceita)
router.get('/admin/receita/del/:id', deletreceita)

//rotas colaboradores
//atendente
router.get('/admin/colaborador-atendente/add', telaaddatendente )
router.post('/admin/colaborador-atendente/add', addatendente)
router.get('/admin/colaborador-atendente/lst', listatendente)
router.post('/admin/colaborador-atendente/lst', filtratendente)
router.get('/admin/colaborador-atendente/edt/:id', telaedtatendente)
router.post('/admin/colaborador-atendente/edt/:id', edtatendente)
router.get('/admin/colaborador-atendente/del/:id', deletatendente) 

//administrador
router.get('/admin/colaborador-adm/add', telaaddadm )
router.post('/admin/colaborador-adm/add', addadm)
router.get('/admin/colaborador-adm/lst', listadm)
router.post('/admin/colaborador-adm/lst', filtradm)
router.get('/admin/colaborador-adm/edt/:id', telaedtadm)
router.post('/admin/colaborador-adm/edt/:id', edtadm)
router.get('/admin/colaborador-adm/del/:id', deletadm)

//veterinario
router.get('/admin/colaborador-vet/add', telaaddvet )
router.post('/admin/colaborador-vet/add', addvet)
router.get('/admin/colaborador-vet/lst', listvet)
router.post('/admin/colaborador-vet/lst', filtrvet)
router.get('/admin/colaborador-vet/edt/:id', telaedtvet)
router.post('/admin/colaborador-vet/edt/:id', edtvet)
router.get('/admin/colaborador-vet/del/:id', deletvet)

