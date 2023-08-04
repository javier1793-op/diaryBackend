const router = require('express').Router();
const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('jwt-simple');
const Login = require("../Models/Login");

//post Register 
router.post("/register", async (req, res) => {
    try {
     
      req.body.password = bcrypt.hashSync(req.body.password,10)
      const data = await Login.create(req.body);
  
      if (!data) {
        throw new Error("An error accured while create register.!");
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching cactch.." });
    }
  });

//post login
router.post("/login", async (req, res) => {

    const user= await Login.findOne({username:req.body.username});
    if(user){
        const equal = bcrypt.compareSync(req.body.password, user.password);
        if(equal){
            res.json({success: createToken(user)});
        }else{
            res.json({error: 'the user or pass invalid2'})
        }
    }else{
        res.json({error: 'the user or pass invalid2'})
    }

});

const createToken = (user)=>{
    const payload = {
        userId: user._id,
        createdAt: moment().unix(),
        expiredAt :moment().add(5,'minutos').unix()   
    }
    return jwt.encode(payload,'nuevo')
}

  module.exports = router