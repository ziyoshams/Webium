const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('user', {
  firstnName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dateJoined: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

User.prototype.getFullName = () => {
  return this.firstnName + ' ' + this.lastName;
}

module.exports = User;