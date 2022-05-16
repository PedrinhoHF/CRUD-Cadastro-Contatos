const {Model, DataTypes} = require('sequelize')

class user extends Model {
  static init(sequelize){
    super.init({
      Nome: DataTypes.STRING,
      Sobrenome: DataTypes.STRING,
      CPF: DataTypes.INTEGER,
      Email: DataTypes.STRING,
      Telefone: DataTypes.INTEGER

    },{
      sequelize
    })
  }
}

module.exports = user