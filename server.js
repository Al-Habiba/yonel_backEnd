const express = require("express");
const app = express();
var corsOptions = {
    origin: "http://localhost:8889" // URL of the frontend
    };
app.use(express.json()); // parsing application/json
app.use(express.urlencoded({ extended: true })); // parsing application/x-www-form-urlencodedconst  // 
const db = require("./models/index.js");
PORT = process.env.PORT || 8880;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur localhost:${PORT}`);
 });

