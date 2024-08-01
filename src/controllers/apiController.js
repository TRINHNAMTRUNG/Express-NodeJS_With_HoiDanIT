const User = require("../models/user");

const getUserApi = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json(
        {
            EC: 0,
            data: results
        }
    );
}
const postCreateUserApi = async (req, res) => {
    const data = req.body;
    let name = data.name;
    let email = data.email;
    let city = data.city;
    let user = await User.create({
        name,
        email,
        city
    })
    return res.status(200).json(
        {
            EC: 0,
            data: user
        }
    );
}
const putCreateUserApi = async (req, res) => {
    const data = req.body;
    let name = data.name;
    let email = data.email;
    let city = data.city;
    let id = data.id;
    console.log("update ngay:", name, email, city, id)
    // await updateUserByID(name, email, city, id);
    let user = await User.updateOne({ id: id }, { name: name, email: email, city: city });
    return res.status(200).json(
        {
            EC: 0,
            data: user
        }
    );
}

module.exports = {
    getUserApi, postCreateUserApi, putCreateUserApi
}

