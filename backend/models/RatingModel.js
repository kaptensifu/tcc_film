import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";
import Film from "./FilmModel.js";

const { DataTypes } = Sequelize;

const Rating = db.define("ratings", {
  rating: DataTypes.INTEGER,
  komentar: DataTypes.STRING
}, {
  freezeTableName: true
});

// Relasi
User.hasMany(Rating);
Rating.belongsTo(User);

Film.hasMany(Rating);
Rating.belongsTo(Film);

(async () => {
  await db.sync();
  console.log("Database synced");
})();

export default Rating;
