const connection = require("../config/database");


const getAllUsers = async ()=> {
    let [results, fields] = await connection.query(
        "SELECT * FROM Users"
    )
    return results;
}

const createUser = async(name, email, city)=> {
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
}

module.exports = {
    getAllUsers, createUser
}