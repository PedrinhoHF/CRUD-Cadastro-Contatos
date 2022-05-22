const {contatosCadastrado} = require('../models');
const ContatosCadastrado = require('../models/ContatosCadastrado');
const ContatosController ={
  index: async (req, res) =>{
    let usuarios = await ContatosCadastrado.findAll()
    console.log(usuarios)
  }
}

module.exports = ContatosController;