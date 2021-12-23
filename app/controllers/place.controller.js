const db = require("../models");
const Place = db.place;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    console.log("Create call")
    if (!req.body.rest_id) {
        res.status(400).send({
            message: "There is some empty field"
        });
        return;
    }

    // Creating object
    const place = {
        rest_id: req.body.rest_id,
        people_number: req.body.people_number
    };

    // Save in database
    Place.create(place)
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

exports.findOne = (req, res) => {
    Place.findAll({where: {rest_id: req.body.rest_id}})
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Specified restaurant does not exist`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Some error in customer.findOne()'
            });
        });
};