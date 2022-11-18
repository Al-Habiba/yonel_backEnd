const express=require('express')
const paysService=require('../services/pays.service')
const routes=express.Router()

routes.post('/',paysService.createPays)

module.exports=routes;