module.exports = (sequelize, DataTypes) => {sequelize.define("ContatosCadastrados",{
id:{ 
    type: DataTypes.INTERGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Sobrenome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CPF:  {
    type: DataTypes.INTEGER,
  },
  Email: {
    type: DataTypes.STRING,
  },
  Telefone:  {
    type: DataTypes.INTEGER,
    allowNull: false,
  } },
  
  {  
    tableName: "ContatosCadastrados",
    timestamps: true,
  })
  return ContatosCadastrados
}





