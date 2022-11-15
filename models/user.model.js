module.exports=(sequelize,Sequelize)=>{
    const User=sequelize.define("user",{
        login:{type:Sequelize.STRING, allowNull:false},
        password:{type:Sequelize.STRING,allowNull:false},
        key:{type:Sequelize.STRING,allowNull:false}
    })
    return User;
}