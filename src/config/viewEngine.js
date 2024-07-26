const path = require("path");
const express = require("express");

const configViewEngine = (app) => {
    // config template engine
    app.set('views', path.join("./src", "views"));
    app.set('view engine', 'ejs');
    // config static file
    /*chỉ định một thư mục cụ thể mà từ đó các tệp tĩnh sẽ được phục vụ. 
Người dùng có thể truy cập vào các tệp trong thư mục này thông qua trình duyệt của họ. 
Điều này có nghĩa là bạn đang xác định rõ ràng thư mục nào sẽ được cấp phép để cung cấp các tệp tĩnh cho người dùng. */
    app.use(express.static(path.join("./src", "public")));
}

module.exports = configViewEngine;