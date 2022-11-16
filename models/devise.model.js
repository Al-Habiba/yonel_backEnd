module.exports=(sequelize,Sequelize)=>{
    const Devise=sequelize.define("devise",{
        code_iso3:{
            type:Sequelize.INTEGER,
            primarKey:true,
            allowNull:false,
        },
        nom:{
            type:Sequelize.STRING,
            allowNull:false,
            unique: true
        },
        symbole:{
            type:Sequelize.STRING
        }
    })
    return Devise
}