module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    // Giving the Author model a name of type STRING
    event_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    event_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    event_location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    event_description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    num_participants: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  });

  Event.associate = function(models) {
    Event.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Event;
};
