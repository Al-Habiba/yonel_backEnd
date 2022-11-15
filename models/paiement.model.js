module.exports=(sequelize,Sequelize)=>{
    const Paiement=sequelize.define("paiement",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            allowNull:false
        },
        date_payement:{type:Sequelize.DATE,allowNull:false},
        type_piece:{type:Sequelize.STRING,allowNull:false},
        numero_piece:{type:Sequelize.INTEGER,allowNull:false},
        nom_complet_recepteur:{type:Sequelize.STRING,allowNull:false},
    })
    return Paiement
}