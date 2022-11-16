const Pays= require("./pays.model")
module.exports=(sequelize,Sequelize)=>
{
const Transaction= sequelize.define("transaction",{
            id:{
                type:Sequelize.INTEGER,
                primaryKey:true,
                autoIncrement:true,
                allowNull:false
            },
            montant_a_recevoir:
            {type:Sequelize.FLOAT,
            allowNull:false
            },
            date_envoi:{
                type:Sequelize.DATE,
                allowNull:false
            },
            frais:{
                type:Sequelize.FLOAT,
                allowNull:false
            },
            montant_total:{
                type:Sequelize.FLOAT,
                allowNull:false
            },
            status:{
                type:Sequelize.ENUM("paid","transmitted","payable","cancelled"),
                allowNull:false
            },
            pays_origine:{
                    type:Sequelize.INTEGER,
                    allowNull:false,
                    references:{
                        model: 'pays',
                        field:'codeiso2'
                    }
            },
            pays_destination:{
                type:Sequelize.INTEGER,
                    allowNull:false,
                    references:{
                        model: 'pays',
                        key:'codeiso2'
                    }
            },
            
})
return Transaction
}