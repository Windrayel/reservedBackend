module.exports = app => {
    const customer = require("../controllers/customer.controller");

    var router = require("express").Router();

    // Create a new restaurant
    router.post("/", customer.create);

    // Take all restaurants
    router.get("/", customer.findOne);

    app.use('/api/customer', router);
};