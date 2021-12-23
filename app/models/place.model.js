module.exports = (sequelize, Sequelize) => {
    const place = sequelize.define("place", {
        rest_id: {
            type: Sequelize.INTEGER
        },
        people_number: {
            type: Sequelize.INTEGER
        },
        inner_id: {
            type: Sequelize.INTEGER
        },
    });
    return place;
};