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
    
}