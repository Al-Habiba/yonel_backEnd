module.exports=(sequelize,Sequelize)=>{
    const User=sequelize.define("user",{
        login:{type:Sequelize.STRING,primaryKey:true,allowNull:false},
        password:{type:Sequelize.STRING,allowNull:false},
        token:{type:Sequelize.STRING,allowNull:false}
    })
    return User;
}