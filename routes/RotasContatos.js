var express = require('express');
var router = express.Router();

const ContatosController = require('../controller/ContatosController');


router.get('/',ContatosController.index);

module.exports = router;
