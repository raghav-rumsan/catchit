const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    res.send(401);
  }
  jwt.verify(token, keys.accessTokenKey, (err, user) => {
    if (error) return res.send(403);
    req.userData = userData;
    next();
  });
};
