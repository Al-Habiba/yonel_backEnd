const { Transaction } = require("sequelize")
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
                type:Sequelize.STRING,
                allowNull:false,
                references:{
                    model: 'pays',
                    key:'nom'
                }
        },
        pays_destination:{
            type:Sequelize.STRING,
                allowNull:false,
                references:{
                    model: 'pays',
                    key:'nom'
                }
        },
        devise_destination:{
            type:Sequelize.STRING,
                allowNull:false,
                references:{
                    model: 'devises',
                    key:'codeiso3'
                }
        },
        devise_origine:{
            type:Sequelize.STRING,
                allowNull:false,
                references:{
                    model: 'devises',
                    key:'codeiso3'
                }
        },
            
})
return Transaction
}



//start Transaction pour ne pas faire d'auto-commit donc se termine par commit et rollback pour annuler 