const connection = require("../config/database");
const { getAllUsers, createUser, getUserByID, updateUserByID, deleteUserByID } = require("../services/CRUDService");
const getHomePage = async (req, res) => {
    let results = await User.find({});
    return res.render("home.ejs", { listUser: results });
}
const User = require("../models/user");

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}
const getUpdatePage = async (req, res) => {
    const idUser = req.params.id;
    const user = await getUserByID(idUser);
    res.render('edit.ejs', { user: user });
}

const postCreateUser = async (req, res) => {
    const data = req.body;
    let name = data.name;
    let email = data.email;
    let city = data.city;

    await User.create({
        name,
        email,
        city
    })
    res.send("create a new user");
}

const postUpdateUser = async (req, res) => {
    const data = req.body;
    let name = data.name;
    let email = data.email;
    let city = data.city;
    let id = data.id;
    console.log("update ngay:", name, email, city, id)
    await updateUserByID(name, email, city, id);
    res.redirect("/");
}
const postDeleteUser = async (req, res) => {
    const idUser = req.params.id;
    const user = await getUserByID(idUser);
    res.render("delete.ejs", { user: user });
}
const postRemoveUser = async (req, res) => {
    const userId = req.body.id;
    await deleteUserByID(userId);
    res.redirect("/");
}

module.exports = {
    getHomePage, postCreateUser, postRemoveUser,
    getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser
}