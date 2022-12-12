module.exports=(sequelize,Sequelize)=>{
    const Devise=sequelize.define("devise",{
        codeiso3:{
            type:Sequelize.STRING,
            primaryKey:true,
            allowNull:false,
    
        },
        nom:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        symbole:{
            type:Sequelize.STRING
        }
    })
    return Devise
}