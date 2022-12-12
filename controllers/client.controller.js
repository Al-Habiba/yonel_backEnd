const express=require('express')
const clientService=require('../services/client.service')
const routes=express.Router()

routes.post('/',clientService.createClient)
routes.get('/:phone', clientService.getClientById)
routes.get('/',clientService.getAllClient)
routes.delete('/:phone',clientService.deleteClient)
routes.patch('/:phone',clientService.updateClient)
routes.put('/:phone',clientService.updateClient)

module.exports=routes;