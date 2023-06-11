'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    class Order extends Model {
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
    Order.init({
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        payment_email: {
            type: Sequelize.STRING
        },
        cost: {
            type: Sequelize.INTEGER,
        },
        courseInfo: {
            type: Sequelize.ARRAY(Sequelize.STRING),
        },
        userId: {
            type: Sequelize.UUID
        },
        paymentId: {
            type: Sequelize.STRING
        },
        quantity: {
            type: Sequelize.INTEGER
        },
        phone: {
            type: Sequelize.STRING
        },
        orderId: {
            type: Sequelize.STRING
        },
    }, {
        sequelize,
        modelName: 'Order',
        tableName: 'Order',
    });
    return Order;
};