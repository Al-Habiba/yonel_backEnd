const db=require('../models')
const Client= db.client;

module.exports={
    async createClient(req,res){
        Client.create(req.body)
        .then(client=>{
            res.status(201).json(client)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    },
    getAllClient(req,res){
        Client.findAll()
        .then(function(client){res.status(200).json(client)})
        .catch(function(err){res.status(500).json(err)})
    },
    async getClientById(req,res){
        const phone = req.params['phone']
        res.status(200).json(await Client.findByPk(phone, {
            include: [{
                all: true, nested: true
            }]
        }))
    },
    async updateClient(req, res) {
        const  phoneClient= req.params['phone']
        const clientUpdated =  await Client.update(req.body, {where: {phone:phoneClient}});
        res.status(201).json(clientUpdated);
    },
    async deleteClient(req, res) {
        await Client.destroy({where: {phone:req.params['phone']}});
        res.status(200).json({status: 'success',message:'client bien supprimée'});
    },
}