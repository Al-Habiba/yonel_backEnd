const db=require('../models')
const Paiement= db.paiement;
const Transaction=db.transaction;
const Client= db.client;
module.exports={
    async createPaiement(req,res){
        const idPaiement=req.body.transactionId
        const idfound=await Transaction.findByPk(idPaiement)
        const phoneReceiver=idfound.recepteurId

        const client=await Client.findByPk(phoneReceiver)
        nom_recepteur=client.nom;
        prenom_recepteur=client.prenom;
        const {id,date_payement,type_piece,transactionId,numero_piece}=req.body
        console.log(phoneReceiver)
        if(!idfound){
            res.status(400).send(" idTransaction  not found")
        }
        Paiement.create({
            id,
            date_payement,
            type_piece,
            transactionId,
            numero_piece,
            nom_complet_recepteur:nom_recepteur+' '+prenom_recepteur,
        })
        .then(paiement=>{
            res.status(201).json(paiement)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    },
     getAllPaiement(req,res){
        Paiement.findAll(
            {
                include :[
                    {
                        model:Transaction,
                        required:false,

                    include:{
                        model:Client,
                        as: 'emetteur'     
                    }
                    }
                   
                ]
            },
           

        )
        .then(function(paiement){res.status(200).json(paiement)})
        .catch(function(err){res.status(500).json(err)})
    },
    async getPaiementById(req,res){
        const id = req.params['id']
        res.status(200).json(await Paiement.findByPk(id, {
            include: [{
                all: true, nested: true
            }]
        }))
    },
    async updatePaiement(req, res) {
        const  idPaiement= req.params['id']
        const paiementUpdated =  await Paiement.update(req.body, {where: {id:idPaiement}});
        res.status(201).json(paiementUpdated);
    },
    async deletePaiement(req, res) {
        await Paiement.destroy({where: {id:req.params['id']}});
        res.status(200).json({status: 'success',message:'paiement bien supprimée'});
    },
}