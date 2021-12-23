module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define("model", {
        customer_id: {
            type: Sequelize.INTEGER
        },
        place_id: {
            type: Sequelize.INTEGER
        },
        restaurant_id: {
            type: Sequelize.INTEGER
        },
        begin_time: {
            type: Sequelize.TIMESTAMP
        },
        end_time: {
            type: Sequelize.TIMESTAMP
        }
    });

    return model;
};