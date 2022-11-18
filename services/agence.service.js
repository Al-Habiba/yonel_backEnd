const db=require('../models')
const Agence= db.agence;

module.exports={
    async createAgence(req,res){
        Agence.create(req.body)
        .then(agence=>{
            res.status(201).json(agence)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    },
    
}