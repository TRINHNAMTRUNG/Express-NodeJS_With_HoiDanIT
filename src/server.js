
const express = require('express');
const path = require("path");
require('dotenv').config()

// --------------------------------------------------------------

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// config static file
app.use(express.static(path.join(__dirname, "public")));

// config routes
app.get('/', (req, res) => {
    res.render("sample.ejs");
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})