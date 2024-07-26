const connection = require("../config/database");
const getHomePage = (req, res) => {
    res.render("sample.ejs");
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

module.exports = {
    getHomePage, getAbc
}