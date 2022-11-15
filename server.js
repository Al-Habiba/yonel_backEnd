const express =require('express');
const app=express();
const bodyParser=require("body-parser");
const cors=require("cors");
PORT = process.env.PORT || 8780;

const corsOptions={
    origin:"http://localhost:8780"
}

app.use(cors(corsOptions))

app.use(bodyParser.json());


var db=require("./models/index");
db.sequelize.sync({force: true})
.then(()=>{console.log("Base de données bien synchronisée")})
.catch((err=>{console.log("Echec lors de la synchronisation :"+err.message)}))
app.listen(PORT, () => {
    console.log(`Serveur lancé sur localhost:${PORT}`);
 });

