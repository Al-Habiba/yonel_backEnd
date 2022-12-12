const agenceService=require('../services/agence.service')
const express=require('express');
const routes=express.Router();

    routes.post('/',agenceService.createAgence)
    routes.get('/:code',agenceService.getAgenceById)
routes.get('/',agenceService.getAllAgence)
routes.delete('/:code',agenceService.deleteAgence)
routes.patch('/:code',agenceService.updateAgence)
routes.put('/:code',agenceService.updateAgence)
    module.exports=routes;