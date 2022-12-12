const dbConfig=require("../config/db.conf");

const Sequelize= require("sequelize");


const sequelize= new Sequelize (dbConfig.DB, dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    operatorsAliases:false,
    pool: 
    {
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
    }
})

const db={}

db.Sequelize=Sequelize;
db.sequelize=sequelize;

//les tables dans la base de données

db.transaction=require("./transaction.model")(sequelize, Sequelize);
db.agence=require("./agence.model")(sequelize, Sequelize);
db.devise=require("./devise.model")(sequelize, Sequelize);
db.paiement=require("./paiement.model")(sequelize, Sequelize);
db.pays=require("./pays.model")(sequelize, Sequelize);
db.sous_agence=require("./sous_agence.model")(sequelize, Sequelize);
db.ville=require("./ville.model")(sequelize, Sequelize);
db.user=require("./user.model")(sequelize, Sequelize);
db.client=require("./client.model")(sequelize, Sequelize);

//les relations entre les tables 

//relation entre agence et sous agence
db.agence.hasMany(db.sous_agence,{onDelete:'cascade',onUpdate:'cascade'});
db.sous_agence.belongsTo(db.agence);

//relation entre pays et ville
db.pays.hasMany(db.ville,{onDelete:'cascade',onUpdate:'cascade'});
db.ville.belongsTo(db.pays);

//relation entre pays et devise
db.devise.hasMany(db.pays,{onDelete:'cascade',onUpdate:'cascade'});
db.pays.belongsTo(db.devise);

//relation entre paiement et transaction
db.transaction.hasOne(db.paiement,{onDelete:'cascade',onUpdate:'cascade'});
db.paiement.belongsTo(db.transaction);

//relation entre transaction et devise 
//db.devise.hasMany(db.transaction);
//db.transaction.belongsTo(db.devise);

//relation entre user et sous agence
db.sous_agence.hasMany(db.user,{onDelete:'cascade',onUpdate:'cascade'});
db.user.belongsTo(db.sous_agence);

//relation entre user et transaction
db.user.hasMany(db.transaction,{onDelete:'cascade',onUpdate:'cascade'});
db.transaction.belongsTo(db.user);

//création index emetteur et recepteur pour la table transaction
db.transaction.belongsTo(db.client,{as:'emetteur',foreignKey:'emetteurId'});
db.transaction.belongsTo(db.client,{as:'recepteur',foreignKey:'recepteurId'});
module.exports=db;
