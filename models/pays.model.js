module.exports=(sequelize,Sequelize)=>{
    const Pays=sequelize.define("pays",{
        codeiso2:{
            type:Sequelize.STRING,
            primaryKey:true,
            allowNull:false
        },
        nom:{type:Sequelize.STRING,allowNull:false,unique:true}
    })
    return Pays
}