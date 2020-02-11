require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.isLoggedin = function (req, res, next){
    try{
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded){
            if (decoded){
                return next();
            } else{
                res.status(400).send(err)
            }
        });
      } catch(err){
        return next(err);
    };
}