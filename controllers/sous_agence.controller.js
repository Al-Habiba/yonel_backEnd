const sous_agenceService=require('../services/sous_agence.service')
const express=require('express');
const routes=express.Router();

    routes.post('/',sous_agenceService.createSousAgence)
    routes.get('/:code_sous_agence',sous_agenceService.getSousAgenceById)
    routes.get('/',sous_agenceService.getAllSousAgence)
    routes.delete('/:code_sous_agence',sous_agenceService.deleteSousAgence)
    routes.patch('/:code_sous_agence',sous_agenceService.updateSousAgence)
    routes.put('/:code_sous_agence',sous_agenceService.updateSousAgence)
    module.exports=routes;