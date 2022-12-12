const db=require('../models')
const Agence= db.agence;
const Sous_agence= db.sous_agence;
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
    getAllAgence(req,res){
        Agence.findAll(
            {
                include :[
                    {
                        model:Sous_agence,
                        required:false,
                        attributes:['nom','code_sous_agence']
    
                    }
                   
                ]
            }
        )
        .then(function(agence){res.status(200).json(agence)})
        .catch(function(err){res.status(500).json(err)})
    },
    async getAgenceById(req,res){
        const id = req.params['code']
        res.status(200).json(await Agence.findByPk(id, {
            include: [{
                all: true, nested: true
            }]
        }))
    },
    async updateAgence(req, res) {
        const  idAgence= req.params['code']
        const agenceUpdated =  await Agence.update(req.body, {where: {code:idAgence}});
        res.status(201).json({message:'modification effectuée avec succès',agenceUpdated});
    },
    async deleteAgence(req, res) {
        await Agence.destroy({where: {code:req.params['code']}});
        res.status(200).json({status: 'success',message:'agence bien supprimée'});
    },
    
}