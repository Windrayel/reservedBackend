module.exports = (sequelize, Sequelize) => {
    const customer = sequelize.define("customer", {
        name: {
            type: Sequelize.STRING
        },
        login: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.STRING
        },
        mail: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        }
    });

    return customer;
};