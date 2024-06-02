// Import necessary parts of Sequelize library
const { Model, DataTypes } = require('sequelize');
// Import database connection from config.js
const sequelize = require('../config/connection');

// Initialize User model (table) by extending off Sequelize's Model class
class User extends Model {}

// Set up fields and rules for User model
User.init(
  {
    // Define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define a username column
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define an email column
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    // Define a password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // Don't automatically create createdAt/updatedAt timestamp fields
    freezeTableName: true,
    // Use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // Make it so our model name stays lowercase in the database
    modelName: 'user',
  }
);

module.exports = User;
