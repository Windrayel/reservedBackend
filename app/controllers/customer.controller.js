const db = require("../models");
const Customer = db.customer;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    console.log("Create call")
    if (!req.body.name) {
        res.status(400).send({
            message: "There is some empty field"
        });
        return;
    }

    // Creating object
    const customer = {
        name: req.body.name,
        login: req.body.login,
        password: req.body.password,
        role: req.body.role,
        mail: req.body.mail,
        phone: req.body.phone
    };

    // Save in database
    Customer.create(customer)
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

// exports.findAll = (req, res) => {
//     Customer.findAll()
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

exports.findOne = (req, res) => {
    Customer.findOne({where: {login: req.body.login, password: req.body.password}})
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Customer does not exist`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Some error in customer.findOne()'
            });
        });
};