const express=require('express')
const villeService=require('../services/ville.service')
const routes=express.Router()

routes.post('/',villeService.createVille)
routes.get('/:id',villeService.getVilleById)
routes.get('/',villeService.getAllVille)
routes.delete('/:id',villeService.deleteVille)
routes.patch('/:id',villeService.updateVille)
routes.put('/:id',villeService.updateVille)
module.exports=routes;