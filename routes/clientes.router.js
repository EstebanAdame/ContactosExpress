const express = require('express');
const ClienteService = require('../services/clientes.service');

const router = express.Router();
const service = new ClienteService();



//CONSULTAR TODOS LOS CLIENTES
router.get('/',async function(req,res,next){
  try{
      res.json(await service.find());
  }catch(error){
      next(error);
  }
});

//CONSULTAR UN SOLO CLIENTE
router.get('/:id',async function(req,res,next){
  try{
      res.json(await service.findOne(req.params.id));
  }catch(error){
      console.error(`Error al obtener el Cliente`,error.message);
      next(error);
  }
});

//AGREGAR CLIENTE
router.post('/',async function(req,res,next){
  try{
      console.error(req.body);
      res.json(await service.create(req.body));
  }catch(error){
      console.error(`Error mientras se creaba el registro`,
      error.message);
      next(error);
  }
});

//MODIFICAR CLIENTE
router.put('/:id/',async function(req,res,next){
  try {
      res.json(await service.update(
          req.params.id,req.body))
  } catch (error) {
      console.error(`Error mientras se creaba el registro`,
      error.message);
      next(error);
  }
});

//ELIMINAR CLIENTE
router.delete('/:id',async function(req,res,next){
  try {
      res.json(await service.delete(
          req.params.id));
  } catch (error) {
      next(error);
  }
});

//MANEJO DE CONTACTOS
//TODOS LOS CONTACTOS DE UN CLIENTE
router.get('/:id/contacto',async function(req,res,next){

  try{
      res.json(await service.findContacts(req.params.id));
  }catch(error){
      console.error(`Error al obtener los Contactos`,error.message);
      next(error);
  }
});

router.get('/:id/contacto/:idCo',async function(req,res,next){
  try{
      res.json(await service.findContact(req.params.id, req.params.idCo));
  }catch(error){
      console.error(`Error al obtener el Contacto`,error.message);
      next(error);
  }
});

router.post('/:id/contacto',async function(req,res,next){
  try{
      console.error(req.body);
      res.json(await service.createContact(req.params.id, req.body));
  }catch(error){
      console.error(`Error mientras se creaba el registro`,
      error.message);
      next(error);
  }
});

router.put('/:id/contacto/:idCo',async function(req,res,next){
  try {
      res.json(await service.updateContact(
          req.params.id,req.body,req.params.idCo))
  } catch (error) {
      console.error(`Error mientras se creaba el registro`,
      error.message);
      next(error);
  }
});

router.delete('/:id/contacto/:idCo',async function(req,res,next){
  try {
      res.json(await service.deleteContact(
          req.params.id, req.params.idCo));
  } catch (error) {
      next(error);
  }
});

module.exports=router;
