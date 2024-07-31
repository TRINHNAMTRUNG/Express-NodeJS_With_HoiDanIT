
const express = require("express");
const routerAPI = express.Router();
const { getUserApi } = require("../controllers/apiController")
// config routes
/*Phương thức app.get(name) trong Express chủ yếu được sử dụng để truy xuất các giá trị cấu hình của ứng dụng. Tuy nhiên, phương thức app.get() cũng có một vai trò quan trọng khác là định nghĩa các route để xử lý các yêu cầu HTTP GET.*/
/* router */
routerAPI.get('/', (req, res) => {
    res.status(200).json({
        data: "hellowean"
    })
});
routerAPI.get('/users', getUserApi);

module.exports = routerAPI;