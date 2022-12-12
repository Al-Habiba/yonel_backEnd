const db=require('../models')
const Pays= db.pays;
const Ville= db.ville;
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
    async getPaysById(req,res){
        const id=req.params.codeiso2
        res.status(200).json(await Pays.findByPk(id))
    },
    getAllPays(req,res){
        Pays.findAll({
            include :[
                {
                    model:Ville,
                    required:false,
                    attributes:['nom']

                }
               
            ]
        })
        .then(function(pays){res.status(200).json(pays)})
        .catch(function(err){res.status(500).json(err)})
    },
    async updatePays(req, res) {
        const  idPays= req.params['codeiso2']
        const paysUpdated =  await Pays.update(req.body, {where: {codeiso2:idPays}});
        res.status(201).json(paysUpdated);
    },
    async deletePays(req, res) {
        await Pays.destroy({where: {codeiso2:req.params['codeiso2']}});
            await Ville.destroy({where:{payCodeiso2:req.params['codeiso2']}})
        res.status(200).json({status: 'success',message:'pays bien supprimé'});
    },
    
}