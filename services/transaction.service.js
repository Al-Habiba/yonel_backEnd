const db=require('../models')
const Transaction= db.transaction;
const Client= db.client;
const User= db.user;
module.exports={
    async createTransaction(req,res){
        try {
            //const {userLogin, emetteurId,recepteurId} = req.body
            const fk_login= await User.findByPk(req.body.userLogin)
            const fk_emetteur= await Client.findByPk(req.body.emetteurId)
            const fk_recepteur=await Client.findByPk(req.body.recepteurId)
            if(!(fk_login && fk_emetteur && fk_recepteur)){
                
          if(!fk_login){
            res.status(400).send("Verify the operator")
          }
          
          if(!fk_emetteur){
            res.status(400).send("Verify the sender's phone number")
          }
          
          if(! fk_recepteur){
            res.status(400).send("Verify the receiver's phone number")
          }
            }
          else {
            Transaction.create(req.body)
        .then(transaction=>{
            res.status(201).json(transaction)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
          }
         /* const recepteurId= Client.findByPk(req.body.recepteurId)
          if (!(emetteurId && recepteurId && userLogin)) {
            res.status(400).send("Verify the foreign keys");
          };*/
        }
        catch(err) {
            console.error(err);
        };
        
    },
    
    getAllTransaction(req,res){
        Transaction.findAll({
          include: [{
              all: true, nested: true
          }]
      })
        .then(function(transaction){res.status(200).json(transaction)})
        .catch(function(err){res.status(500).json(err)})
    },
    async getTransactionById(req,res){
        const id = req.params['id']
        res.status(200).json(await Transaction.findByPk(id, {
          include: [{
              all: true, nested: true
          }]
      }))
    },
    async updateTransaction(req, res) {
        const  idTransaction= req.params['id']
        const transactionUpdated =  await Transaction.update(req.body, {where: {id:idTransaction}});
        res.status(201).json({message:'modification effectuée avec succès',transactionUpdated});
    },
    async deleteTransaction(req, res) {
        await Transaction.destroy({where: {id:req.params['id']}});
        res.status(200).json({status: 'success',message:'transaction bien supprimée'});
    },
    
}