const connection = require("../config/database");
const {getAllUsers, createUser, getUserByID, updateUserByID} = require("../services/CRUDService");
const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render("home.ejs", {listUser: results});
}

const getCreatePage = (req, res)=> {
    res.render('create.ejs');
}
const getUpdatePage = async (req, res)=> {
    const idUser = req.params.id;
    const user = await getUserByID(idUser);
    res.render('edit.ejs', {user: user});
}

const postCreateUser = async (req, res) => {
    const data = req.body;
    let name = data.name;
    let email = data.email;
    let city = data.city;
    await createUser(name, email, city);
    res.send("create a new user");
}

const postUpdateUser = async (req, res)=> {
    const data = req.body;
    let name = data.name;
    let email = data.email;
    let city = data.city;
    let id = data.id;
    console.log("update ngay:",name, email, city, id)
    await updateUserByID(name, email, city, id);
    res.redirect("/")
}

module.exports = {
    getHomePage, postCreateUser,
    getCreatePage, getUpdatePage, postUpdateUser
}