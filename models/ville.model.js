module.exports=(sequelize,Sequelize)=>{
    const Ville=sequelize.define("ville",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            allowNull:false,
        },
        nom:{type:Sequelize.STRING,allowNull:false}
    })
    return Ville
}