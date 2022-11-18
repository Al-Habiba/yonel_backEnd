const express =require('express');
const app=express();
const bodyParser=require("body-parser");
const cors=require("cors");
const agenceController=require('./controllers/agence.controller');
const sousAgenceController=require('./controllers/sous_agence.controller');
const userController=require('./controllers/user.controller');
const villeController=require('./controllers/ville.controller');
const paysController=require('./controllers/pays.controller');
const deviseController=require('./controllers/devise.controller');
PORT = process.env.PORT || 8780;

const corsOptions={
    origin:"http://localhost:8780"
}

app.use(cors(corsOptions))

app.use(bodyParser.json());


var db=require("./models/index");

app.use('/agence',agenceController)
app.use('/agence/sousAgence',sousAgenceController)
app.use('/agence/sousAgence/user',userController);
app.use('/agence/pays',paysController);
app.use('/agence/ville',villeController);
app.use('/agence/devise',deviseController);
db.sequelize.sync(/*{force: true}*/)
.then(()=>{console.log("Base de données bien synchronisée")})
.catch((err=>{console.log("Echec lors de la synchronisation :"+err.message)}))
app.listen(PORT, () => {
    console.log(`Serveur lancé sur localhost:${PORT}`);
 });

