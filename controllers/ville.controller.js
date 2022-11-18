const express=require('express')
const villeService=require('../services/ville.service')
const routes=express.Router()

routes.post('/',villeService.createVille)

module.exports=routes;