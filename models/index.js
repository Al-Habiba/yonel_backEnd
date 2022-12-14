const config=require("../config/config.json");

const Sequelize= require("sequelize");

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    "port":8880,
    dialect:'mysql'
  });

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


//les relations entre les tables 

//relation entre agence et sous agence
db.agence.hasMany(db.sous_agence);
db.sous_agence.belongsTo(db.agence);

//relation entre pays et ville
db.pays.hasMany(db.ville);
db.ville.belongsTo(db.pays);

//relation entre pays et devise
db.devise.hasMany(db.pays);
db.pays.belongsTo(db.devise);

//relation entre paiement et transaction
db.transaction.hasOne(db.paiement);
db.paiement.belongsTo(db.transaction);

//relation entre transaction et devise 
db.devise.hasMany(db.transaction);
db.transaction.belongsTo(db.devise);

//relation entre user et sous agence
db.sous_agence.hasMany(db.user);
db.user.belongsTo(db.sous_agence);

//relation entre user et transaction
db.user.hasMany(db.transaction);
db.transaction.belongsTo(db.user);

//création index pays origine et pays destination

module.exports=db;
