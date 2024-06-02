// Import necessary parts of Sequelize library
const { Model, DataTypes } = require('sequelize');
// Import database connection from config.js
const sequelize = require('../config/connection');

// Initialize Post model (table) by extending off Sequelize's Model class
class Post extends Model {}

// Set up fields and rules for Post model
Post.init(
  {
    // Define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define a title column
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define a content column
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // Define a user_id column
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
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
    modelName: 'post',
  }
);

module.exports = Post;
