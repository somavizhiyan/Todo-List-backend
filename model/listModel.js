const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");
const List = sequelize.define("List", {
  // id: {
  //   type: DataTypes.INTEGER,
  //   autoIncrement: true,
  //   primaryKey: true,
  //   allowNull:true
  // },

  data: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = List;
