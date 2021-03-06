module.exports = app => {
    const reservation = require("../controllers/reservation.controller");

    var router = require("express").Router();

    router.post("/", reservation.create);

    router.get("/", reservation.findAllByRestaurant);

    router.get("/customer/:customer_id", reservation.findAllByCustomer)

    app.use('/api/reservation', router);
};