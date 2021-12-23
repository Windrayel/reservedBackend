module.exports = (sequelize, Sequelize) => {
    const reservation = sequelize.define("reservation", {
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
            type: Sequelize.DATE
        },
        end_time: {
            type: Sequelize.DATE
        }
    });

    return reservation;
};