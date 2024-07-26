
const getHomePage = (req, res)=> {
    res.render("sample.ejs");
}

const getAbc = (req, res)=> {
    res.send("HELLO ABC PAGE !!!");
}

module.exports = {
    getHomePage, getAbc
}