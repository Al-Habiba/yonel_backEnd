const express=require('express')
const deviseService=require('../services/devise.service')
const routes=express.Router()

routes.post('/',deviseService.createDevise)
routes.get('/:codeiso3',deviseService.getDeviseById)
routes.get('/',deviseService.getAllDevise)
routes.delete('/:codeiso3',deviseService.deleteDevise)
routes.patch('/:codeiso3',deviseService.updateDevise)
routes.put('/:codeiso3',deviseService.updateDevise)
module.exports=routes;