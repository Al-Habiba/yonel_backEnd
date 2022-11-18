const agenceService=require('../services/agence.service')
const express=require('express');
const routes=express.Router();

    routes.post('/',agenceService.createAgence)

    module.exports=routes;