import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Film = db.define("films", {
  judul: DataTypes.STRING,
  genre: DataTypes.STRING,
  tahun: DataTypes.INTEGER
}, {
  freezeTableName: true
});

export default Film;
