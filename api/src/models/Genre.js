const { DataTypes } = require("sequelize");
// const {v4: uuid} = require('uuid')//ver
// type: DataTypes.UUID,
// defaultValue: () => uuid(),

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Genre', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            // validate: {
            //     len: [0, 15],
            // },
        },
    },
    { timestamps: false });
  };
