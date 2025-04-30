const { DataTypes } = require("sequelize");
const Sequelize = require("./../db/pg-base");

const Status = Sequelize.define(
  "status",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
  }
);

const Appeal = Sequelize.define(
  "appeal",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    text: { type: DataTypes.STRING, allowNull: false },
    theme: { type: DataTypes.STRING, allowNull: false },
    solving: { type: DataTypes.STRING, allowNull: true },
    cancel: { type: DataTypes.STRING, allowNull: true },
    date: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW },
  },
  {
    timestamps: false,
  }
);

Status.hasOne(Appeal);
Appeal.belongsTo(Status);

module.exports = {
  Appeal,
  Status,
};
