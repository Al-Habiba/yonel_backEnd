module.exports=(sequelize,Sequelize)=>{
    const Agence=sequelize.define("agence",{
        code:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            allowNull:false
        },
        status:{type:Sequelize.ENUM("actif","inactif"),allowNull:false},
        montant:{type:Sequelize.FLOAT,allowNull:false},
    })
    return Agence
}