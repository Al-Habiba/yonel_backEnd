const db=require('../models')
const Pays= db.pays;

module.exports={
    async createPays(req,res){
        Pays.create(req.body)
        .then(pays=>{
            res.status(201).json(pays)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    },
    
}