
const express = require("express");
const router = express.Router();
const { getHomePage, postCreateUser, getCreatePage,
    getUpdatePage, postUpdateUser, postDeleteUser,
    postRemoveUser } = require("../controllers/homeController");

// config routes
/*Phương thức app.get(name) trong Express chủ yếu được sử dụng để truy xuất các giá trị cấu hình của ứng dụng. Tuy nhiên, phương thức app.get() cũng có một vai trò quan trọng khác là định nghĩa các route để xử lý các yêu cầu HTTP GET.*/
/* router */
router.get('/', getHomePage);
router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);
router.post('/delete-user/:id', postDeleteUser);
router.post('/delete-user', postRemoveUser);

module.exports = router;