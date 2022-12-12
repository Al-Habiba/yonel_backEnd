const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("Il vous faut un token pour l'authentication. Veuillez vous inscrire pour générer un token");
  }
  try {
    const decoded = jwt.verify(token, 'secret');
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Token invalide");
  }
  return next();
};

module.exports = verifyToken;