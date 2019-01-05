const Sequelize = require('sequelize');
const db = require('./db');


const Article = db.define('article', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT,
  },
  date: {
    type: Sequelize.DATE
  },
  background: {
    type: Sequelize.STRING
  }
});

module.exports = Article;