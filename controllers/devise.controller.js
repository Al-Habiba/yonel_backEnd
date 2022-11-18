const express=require('express')
const deviseService=require('../services/devise.service')
const routes=express.Router()

routes.post('/',deviseService.createDevise)

module.exports=routes;