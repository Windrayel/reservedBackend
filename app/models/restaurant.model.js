module.exports = (sequelize, Sequelize) => {
    const restaurant = sequelize.define("restaurant", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        owner: {
            type: Sequelize.INTEGER
        },
        begin_work: {
            type: Sequelize.TIME
        },
        end_work: {
            type: Sequelize.TIME
        },
        picture: {
            type: Sequelize.STRING
        },
        map_picture: {
            type: Sequelize.STRING
        }
    });

    return restaurant;
};