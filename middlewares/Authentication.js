const jwt = require("jsonwebtoken");
require("dotenv").config();
const { UserModel } = require("../model/user.model");

const Authentication = (req, res, next) => {
  const token = req.headers?.authorization;
  if (!token) {
    return res.status(401).json({ msg: "Please login first" }); // return a 401 status code and send the response as JSON
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const { _id, email } = decoded;
    req.body.email = email;
    req.body._id = _id;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Authentication failed" }); // return a 401 status code and send the response as JSON
  }
};

module.exports = {
  Authentication,
};
