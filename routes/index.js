var express = require('express');
var router = express.Router();

const user = require('../models/user');


router.get('/', async (req, res,) =>{
  const {nome, sobrenome} = req.body

  const user = await user.create({nome, sobrenome})
  res.json({user})
});

module.exports = router;
