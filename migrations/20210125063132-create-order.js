'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Order', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      payment_email: {
        type: Sequelize.STRING
      },
      cost: {
        type: Sequelize.INTEGER
      },
      courseInfo: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      userId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        }
      },
      paymentId: {
        type: Sequelize.STRING,
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      phone: {
        type: Sequelize.STRING
      },
      orderId: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Order');
  }
};