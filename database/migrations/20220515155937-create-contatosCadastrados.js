'use strict';

module.exports = {
   up (queryInterface, Sequelize) {

 return queryInterface.createTable('ContatosCadastrados', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Sobrenome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    CPF:  {
      type: Sequelize.INTEGER,
    },
    Email: {
      type: Sequelize.STRING,
    },
    Telefone:  {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
   });

  },

   down (queryInterface, Sequelize) {
  return queryInterface.dropTable('ContatosCadastrados');

     
  }
};
