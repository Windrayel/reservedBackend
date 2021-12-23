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