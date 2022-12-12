const express=require('express')
const paysService=require('../services/pays.service')
const routes=express.Router()

routes.post('/',paysService.createPays)
routes.get('/:codeiso2', paysService.getPaysById)
routes.get('/',paysService.getAllPays)
routes.delete('/:codeiso2',paysService.deletePays)
routes.patch('/:codeiso2',paysService.updatePays)
routes.put('/:codeiso2',paysService.updatePays)

module.exports=routes;