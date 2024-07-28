const connection = require("../config/database");


const getAllUsers = async ()=> {
    let [results, fields] = await connection.query(
        "SELECT * FROM Users"
    )
    return results;
}
const getUserByID = async (id)=> {
    let [results, fields] = await connection.query(
        "SELECT * FROM Users WHERE id = ?",
        [id]
    );
    let user = results && results.length > 0 ? results[0] : {}
    return user;

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

const updateUserByID = async (name, email, city, id)=> {
    const[results, fields] = await connection.query(
        `UPDATE Users 
        SET email = ?, name = ?, city = ? 
        WHERE id = ?`,
        [email, name, city, id]
    );
}
const deleteUserByID = async (id)=> {
    const[results, fields] = await connection.query(
        `DELETE FROM Users WHERE id = ?`,
        [id]
    );
}

module.exports = {
    getAllUsers, createUser, getUserByID, updateUserByID, deleteUserByID
}