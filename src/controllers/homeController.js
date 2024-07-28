const connection = require("../config/database");
const {getAllUsers, createUser} = require("../services/CRUDService");
const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render("home.ejs", {listUser: results});
}

const getCreatePage = (req, res)=> {
    res.render('create.ejs');
}
const getUpdatePage = (req, res)=> {
    res.render('edit.ejs');
}

const getAbc = (req, res) => {
    // simple query
    connection.query(
        'SELECT * from Users',
        function (err, results, fields) {
            console.log(">>>> res ", results); // results contains rows returned by server
            console.log(">>>>fields ", fields); // fields contains extra meta data about results, if available
            res.send(JSON.stringify(results));
        }
    );
    
}

const postCreateUser = async (req, res) => {
    const data = req.body;
    let name = data.name;
    let email = data.email;
    let city = data.city;
    await createUser(name, email, city);
    res.send("create a new user");
}


module.exports = {
    getHomePage, getAbc, postCreateUser,
    getCreatePage, getUpdatePage
}