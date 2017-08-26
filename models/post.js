module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    email_address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
      len: [10]
    },
    contact_mode: {
      type: DataTypes.BOOLEAN                     ,
      allowNull: false,
    }
  });

  return User;
};