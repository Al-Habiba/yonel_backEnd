const express =require('express');
const app=express();
const bodyParser=require("body-parser");
const cors=require("cors");
const agenceController=require('./controllers/agence.controller');
const sousAgenceController=require('./controllers/sous_agence.controller');
const userController = require("./controllers/user.controller");
//const auth=require("./middleware/auth");
const villeController=require('./controllers/ville.controller');
const paysController=require('./controllers/pays.controller');
const deviseController=require('./controllers/devise.controller');
const clientController=require('./controllers/client.controller');
const transactionController=require('./controllers/transaction.controller');
const paiementController=require('./controllers/paiement.controller');
PORT = process.env.PORT || 8780;

const corsOptions={
    origin:["http://localhost:4201",
            "http://localhost:64166"]
}

app.use(cors(corsOptions))

app.use(bodyParser.json());


var db=require("./models/index");
app.use("/yonel",userController);

app.use('/agence',agenceController)
app.use('/sousAgence',sousAgenceController)
//app.use('/sousAgence/user',userController);
app.use('/pays',paysController);
app.use('/ville',villeController);
app.use('/devise',deviseController);
app.use('/client',clientController);
app.use('/transaction',transactionController);
app.use('/paiement',paiementController)
db.sequelize.sync(/*{force: true}*/)
.then(()=>{console.log("Base de données bien synchronisée")})
.catch((err=>{console.log("Echec lors de la synchronisation :"+err.message)}))
app.listen(PORT, () => {
    console.log(`Serveur lancé sur localhost:${PORT}`);
 });

