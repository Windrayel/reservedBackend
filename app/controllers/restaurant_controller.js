const db = require("../models");
const Restaurant = db.restaurant;
const Op = db.Sequelize.Op;

// exports.create = (req, res) => {
//     // Validate request
//     console.log("Create call")
//     if (!req.body.name) {
//         res.status(400).send({
//             message: "There is some empty field"
//         });
//         return;
//     }
//
//     // Creating object
//     const restaurant = {
//         name: req.body.name,
//         description: req.body.description,
//         address: req.body.address,
//         owner: req.body.owner,
//         begin_work: req.body.begin_work,
//         end_work: req.body.end_work
//     };
//
//     // Save in database
//     Restaurant.create(restaurant)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred at find"
//             });
//         });
// };

exports.findAll = (req, res) => {
    Restaurant.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Restaurant.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Restaurant with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Restaurant with id=" + id
            });
        });
};