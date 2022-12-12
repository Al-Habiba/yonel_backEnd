const express=require('express')
const transactionService=require('../services/transaction.service')
const routes=express.Router()

routes.post('/',transactionService.createTransaction)
routes.get('/:id', transactionService.getTransactionById)
routes.get('/',transactionService.getAllTransaction)
routes.delete('/:id',transactionService.deleteTransaction)
routes.patch('/:id',transactionService.updateTransaction)
routes.put('/:id',transactionService.updateTransaction)

module.exports=routes;