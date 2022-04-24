var User = require('../database-mongo/User.model.js');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

var selectAll = function (req, res) {
  User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

var add = function (req, res){
  let {name,password,email}=req.body

  User.insertMany({name, password,email})
  .then((user) => {
    res.status(200).send(user);
  })
  .catch((error) => {
    res.status(500).send(error);
  });
}

var signup = function(req,res){
  
  const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        address: req.body.address,
        phone: req.body.phone,
        password: bcrypt.hashSync(req.body.password, 10)
      })
newUser.save(err => {
      if (err) {
        return res.status(400).send(err)
      }
      return res.status(200).json({
        title: 'signup success'
      })
    })
  };

  var login = function (req, res){
    User.findOne({username: req.body.username}, (err, user) => {
      if (err) return res.status(500).json({
        title: 'server error',
        error: err
      })
      if (!user) {
        return res.status(401).json({
          title: 'user not found',
          error: 'invalid credentials'
        })
      }
      //incorrect password
      if (!bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(401).json({
          tite: 'login failed',
          error: 'invalid credentials'
        })
      }
      // create a token and send to frontend
      let token = jwt.sign({ userId: user._id}, 'secretkey');
      return res.status(200).json({
        title: 'login sucess',
        token: token
      })
    })
  }
  
  
    var logOut= (req,res)=>{
    let token = req.headers.token; //token
    jwt.verify(token, 'secretkey', (err, decoded) => {
      if (err) return res.status(401).json({
        title: 'unauthorized'
      })
      //token is valid
      User.findOne({ _id: decoded.userId }, (err, user) => {
        if (err) return console.log(err)
        return res.status(200).json({
          title: 'user grabbed',
          user: {
            email: user.email,
            username: user.username,
            address: user.address,
            phone: user.phone,
            id:user.id
          }
        })
      })
  
    })
  }
module.exports = { selectAll , add , signup , login , logOut};
