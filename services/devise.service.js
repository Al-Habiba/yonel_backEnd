const db=require('../models')
const Devise= db.devise;
const Pays=db.pays;
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
    getAllDevise(req,res){
       Devise.findAll(
        {
            include :[
                {
                    model:Pays,
                    required:false,
                    attributes:['nom']

                }
               
            ]
        }
       )
       .then(devise=>{
        res.status(201).json(devise)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
    },
    async getDeviseById(req,res){
        const id = req.params['codeiso3']
        res.status(200).json(await Devise.findByPk(id, {
            include: [{
                all: true, nested: true
            }]
        }))
    },
    async updateDevise(req, res) {
        const  idDevise= req.params['codeiso3']
        const deviseUpdated =  await Devise.update(req.body, {where: {codeiso3:idDevise}});
        res.status(201).json(deviseUpdated);
    },
    async deleteDevise(req, res) {
        await Devise.destroy({where: {codeiso3:req.params['codeiso3']}});
        res.status(200).json({status: 'success',message:'devise bien supprimée'});
    },
}