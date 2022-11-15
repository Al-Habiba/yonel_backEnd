module.exports=(sequelize,Sequelize)=>{
    const Sous_agence=sequelize.define("sous_agence",{
        code_sous_agence:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            allowNull:false
        },
        nom:{type:Sequelize.STRING,allowNull:false} ,
        adresse:{type:Sequelize.STRING,allowNull:false},
        city:{type:Sequelize.STRING,allowNull:false},
        country:{type:Sequelize.STRING,allowNull:false},
        phone:{type:Sequelize.STRING,allowNull:false},
        email:{type:Sequelize.STRING,allowNull:false}
    })
}