module.exports = app => {
    const restaurant = require("../controllers/restaurant_controller");

    var router = require("express").Router();

    // Create a new restaurant
    // router.post("/", restaurant.create);

    // Take all restaurants
    router.get("/", restaurant.findAll);

    app.use('/api/restaurants', router);
};