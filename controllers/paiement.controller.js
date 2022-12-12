const express=require('express')
const paiementService=require('../services/paiement.service')
const routes=express.Router()

routes.post('/',paiementService.createPaiement)
routes.get('/:id', paiementService.getPaiementById)
routes.get('/',paiementService.getAllPaiement)
routes.delete('/:id',paiementService.deletePaiement)
routes.patch('/:id',paiementService.updatePaiement)
routes.put('/:id',paiementService.updatePaiement)

module.exports=routes;