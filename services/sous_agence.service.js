const db=require('../models')
const Sous_agence= db.sous_agence;
const Agence=db.agence;
module.exports={
    async createSousAgence(req,res){
          const agenceCode= req.body.agenceCode;
          const idAgence= Agence.findByPk(agenceCode)
          if (!idAgence) {
            res.status(400).send("agence not found");
          };
        const sousAgence= await Sous_agence.create(req.body)
        res.status(201).json(sousAgence);
          
      },
      getAllSousAgence(req,res){
        Sous_agence.findAll(
          {
            include: [{
                all: true, nested: true
            }]
        }
        )
        .then(function(sous_agence){res.status(200).json(sous_agence)})
        .catch(function(err){res.status(500).json(err)})
    },
    async getSousAgenceById(req,res){
        const id = req.params['code_sous_agence']
        res.status(200).json(await Sous_agence.findByPk(id, {
          include: [{
              all: true, nested: true
          }]
      }))
    },
    async updateSousAgence(req, res) {
        const  idSousAgence= req.params['code_sous_agence']
        const sous_agenceUpdated =  await Sous_agence.update(req.body, {where: {code_sous_agence:idSousAgence}});
        res.status(201).json(sous_agenceUpdated);
    },
    async deleteSousAgence(req, res) {
        await SousAgence.destroy({where: {code_sous_agence:req.params['code_sous_agence']}});
        res.status(200).json({status: 'success',message:'sous agence bien supprimée'});
    },
    
}