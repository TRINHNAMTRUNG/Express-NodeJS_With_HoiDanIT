const connection = require("../config/database");
const getHomePage = (req, res) => {
    return res.render("home.ejs");
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

const postCreateUser = (req, res)=> {
    console.log("checkk body: ", req.body);
    res.send("create a new user");
}

module.exports = {
    getHomePage, getAbc, postCreateUser
}