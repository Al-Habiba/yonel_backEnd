const db=require('../models')
const Devise= db.devise;

module.exports={
    async createDevise(req,res){
        Devise.create(req.body)
        .then(devise=>{
            res.status(201).json(devise)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    },
    
}