const db = require("../models");
const Reservation = db.reservation;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    console.log("Create call")
    if (!req.body.customer_id) {
        res.status(400).send({
            message: "There is some empty field"
        });
        return;
    }

    // Creating object
    const reservation = {
        customer_id: req.body.customer_id,
        place_id: req.body.place_id,
        restaurant_id: req.body.restaurant_id,
        begin_time: req.body.begin_time,
        end_time: req.body.end_time
    };

    // Save in database
    Reservation.create(reservation)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        });
};

exports.findAllByRestaurant = (req, res) => {
    Reservation.findAll({where: {restaurant_id: req.body.restaurant_id}})
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Restaurant does not exist`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Some error in reservation.findAllByRestaurant()'
            });
        });
};