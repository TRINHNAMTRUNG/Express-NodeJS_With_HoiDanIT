
const express = require("express");
const router = express.Router();
const {getHomePage, getAbc} = require("../controllers/homeController");

// config routes
/*Phương thức app.get(name) trong Express chủ yếu được sử dụng để truy xuất các giá trị cấu hình của ứng dụng. Tuy nhiên, phương thức app.get() cũng có một vai trò quan trọng khác là định nghĩa các route để xử lý các yêu cầu HTTP GET.*/
/* router */
router.get('/', getHomePage);
router.get('/abc', getAbc);

module.exports = router;