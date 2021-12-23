module.exports = app => {
    const place = require("../controllers/place.controller");

    var router = require("express").Router();

    // router.post("/", place.create);

    router.get("/", place.findAllByRestId);

    app.use('/api/place', router);
};