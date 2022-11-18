const sous_agenceService=require('../services/sous_agence.service')
const express=require('express');
const routes=express.Router();

    routes.post('/',sous_agenceService.createSousAgence)

    module.exports=routes;