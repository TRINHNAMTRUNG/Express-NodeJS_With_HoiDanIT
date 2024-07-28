const connection = require("../config/database");

const getHomePage = (req, res) => {
    return res.render("home.ejs");
}

const getCreatePage = (req, res)=> {
    res.render('create.ejs');
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
    // connection.query(
    //     `INSERT INTO Users (email, name, city)
    //     VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results, fields) {
    //         console.log(">>>> res ", results); // results contains rows returned by server
    //         console.log("create user is success");
    //     }
    // );
    const [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
        [email, name, city]
    );
    res.send("create a new user");
}


module.exports = {
    getHomePage, getAbc, postCreateUser,
    getCreatePage
}