const db=  require("./../models");
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const Sous_agence=db.sous_agence;
const User=db.user
module.exports = {
   async register(req,res){
    try {
       const {login,password}= req.body
       if(!(password && login)){
        return res.status(400).send("All fiels are required")
       }
       const oldUser= await User.findOne({where:{login}});
       if (oldUser){
        return res.status(409).send("User already exists. Please login")
       }
       encryptedPassword = await bcrypt.hash(password, 10);
       const token = jwt.sign(
        { login },
       // process.env.TOKEN_KEY,
        'secret',
        {
          expiresIn: "7 years",
        }
      );
      const sousAgenceCode= req.body.SousAgenceCodeSousAgence;
      const idSousAgence= await Sous_agence.findByPk(sousAgenceCode)
      if (!idSousAgence) {
        res.status(400).send("Sous agence not found");
      }
      else {
        const user = await User.create({
            login, // sanitize: convert email to lowercase
            sousAgenceCodeSousAgence:sousAgenceCode,
            password: encryptedPassword,
            token:token
              });
            
              res.status(201).json(user);
      }
    
    } catch (error) {
        console.log(error);
    }
   },
   async login (req, res) {
    try {
        const {login, password} = req.body
        if (!(login && password)) {
            res.status(400).send("All status are required")
       }
       const user = await User.findOne({where:{login}});
       if (user && (await bcrypt.compare(password, user.password))) {
        // Verify  token
        const token = jwt.sign(
          {login},
          //process.env.TOKEN_KEY,
          'secret',
          {
            expiresIn: "7 years",
          }
        );
          // save user token
      user.token = token;
       // user
       res.status(200).json(user); 
    }
    else res.status(400).send("Invalid Credentials");
    }  
       catch (error) {
        console.log(error)
       }
   }
   
}