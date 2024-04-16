const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
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
      validate: {
        len: [0, 50],
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING), // almacenar múltiples valores de texto relacionados en una única columna de una tabla.
      allowNull: true,
    },
    background_image: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: { isUrl: true },
      defaultValue: 'https://www.gaceta.unam.mx/wp-content/uploads/2023/08/230831-Aca9-des-f1-videojuegos.jpg'
    },
    released: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0,
        max: 5,
      },
    },
    userCreated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
   {timestamps: false}
  )
};
