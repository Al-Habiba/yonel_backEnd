const db=require('../models')
const Ville= db.ville;
const Pays=db.pays;

module.exports={
    async createVille(req,res){
        const idVille=req.body.payCodeiso2
        const id=await Pays.findByPk(idVille)
        if(!id){
            res.status(400).send(" paysCodeiso2  not found")
        }
        Ville.create(req.body)
        .then(ville=>{
            res.status(201).json(ville)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    },
    
}