//controllers/userController.js
const User = require("../models/user");

//Create a new user
const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(error);
    }
    catch (error) {
        res.status(500).send(error)

    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send();
        }


    }
    catch (error) {
        res.status(500).send(error);
    }
}


const updateUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).send();
        }
        res.send(200).send(user);
    } catch (error) {
        res.status(400).send(error)
    }

}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById
}