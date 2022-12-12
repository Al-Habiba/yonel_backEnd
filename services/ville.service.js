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
    getAllVille(req,res){
        Ville.findAll()
        .then(function(ville){res.status(200).json(ville)})
        .catch(function(err){res.status(500).json(err)})
    },
    async getVilleById(req,res){
        const id = req.params['id']
        res.status(200).json(await Ville.findByPk(id, {
            include: [{
                all: true, nested: true
            }]
        })L)
    },
    async updateVille(req, res) {
        const  idVille= req.params['id']
        const villeUpdated =  await Ville.update(req.body, {where: {id:idVille}});
        res.status(201).json(villeUpdated);
    },
    async deleteVille(req, res) {
        await Ville.destroy({where: {id:req.params['id']}});
        res.status(200).json({status: 'success',message:'ville bien supprimée'});
    },
}