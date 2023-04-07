const mongoose = require('mongoose');

const User = require('../models/user');

exports.userGetAllUsers = async (req, res) => {
    await User
            .find()
            .exec()
            .then((docs) => {
                console.log(docs);
                res.status(200).json(docs);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
};

exports.userCreateUser = async (req, res) => {
    const user = await new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        nic: req.body.nic
    });
    
    user
        .save()
        .then((result) => {
            console.log(result);
    })
        .catch((err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        }));
    
        res.status(200).json({
        message: 'Sucessfully created a new users',
        newUser : user
    });
};