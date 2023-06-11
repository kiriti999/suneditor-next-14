'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    class User_profile extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        // static associate(models) {
        //     // define association here
        //     User.hasMany(models.Course, {
        //         foreignKey: 'userId'
        //     })
        // }
    };
    User_profile.init({
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        }
    }, {
        sequelize,
        modelName: 'User_profile',
    });
    return User_profile;
};