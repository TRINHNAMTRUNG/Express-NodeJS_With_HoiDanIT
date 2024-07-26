
const express = require('express');
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
require('dotenv').config();

// --------------------------------------------------------------
const app = express();

// Thiết lập các biến môi trường trong env, giúp tái sử dụng biến và tiện lợi cho thay đổi giá trị các biến môi trường tại một nơi
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// config routes
app.use("/", webRoutes);

/*Khởi động UNIX Socket và lắng nghe các kết nối trên các path*/
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
})