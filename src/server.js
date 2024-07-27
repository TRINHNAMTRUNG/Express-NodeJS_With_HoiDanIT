
const express = require('express');
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");
require('dotenv').config();

// --------------------------------------------------------------
const app = express();

// Thiết lập các biến môi trường trong env, giúp tái sử dụng biến và tiện lợi cho thay đổi giá trị các biến môi trường tại một nơi
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// config req.doby
//chuyển đổi phần body của req từ json sang object js. Middleware này sẽ phân tích cú pháp các request có header Content-Type là application/json. Nếu request body là JSON hợp lệ, nó sẽ chuyển đổi thành đối tượng JavaScript và gán cho req.body.
app.use(express.json());
//chuyển đổi phần body của req từ urlencoded sang object js. Middleware này sẽ phân tích cú pháp các request có header Content-Type là application/x-www-form-urlencoded.
app.use(express.urlencoded({extended: true}));

// config routes
app.use("/", webRoutes);


/*Khởi động UNIX Socket và lắng nghe các kết nối trên các path*/
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
})