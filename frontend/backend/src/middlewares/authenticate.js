var jwt = require("jsonwebtoken");
require("dotenv").config();
//// oauth=> anyone using somebody authenticate system to authenticate my user 
//ex. er sign in with google so that person sign in with google and google tells us that the person is 
// verified and we are accepting that person info from google and giving sign in and login to person  

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) return reject(err);
      return resolve(decoded);
    });
  });
};

const authenticate = async (req, res, next) => {
  if (!req.headers.authorization)
    return res
      .status(400)
      .send({
        message: "Authorization token not found or incorrect",
        status: false,
      });

  if (!req.headers.authorization.startsWith("Bearer "))
    return res
      .status(400)
      .send({
        message: "Authorization token not found or incorrect",
        status: false,
      });

  const token = req.headers.authorization.trim().split(" ")[1];

  let decoded;

  try {
    decoded = await verifyToken(token);
  }
  catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({
        message: "Authorization token not found or incorrect",
        status: false,
      });
  }

  req.user = decoded.user._id;
  console.log(req.user)
  return next();

};

module.exports = authenticate;
