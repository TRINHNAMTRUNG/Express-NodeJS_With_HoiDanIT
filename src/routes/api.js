
const express = require("express");
const routerAPI = express.Router();
const { getUserApi, postCreateUserApi, putCreateUserApi, deleteUserApi,
    postUploadSingleFileApi, postUploadMultipleFilesApi } = require("../controllers/apiController")
const { postCreatecustomerApi, postArrayCustomersApi,
    getAllCustomersApi, putUpdateCustomerApi
} = require("../controllers/customerController");
// config routes
/*Phương thức app.get(name) trong Express chủ yếu được sử dụng để truy xuất các giá trị cấu hình của ứng dụng. Tuy nhiên, phương thức app.get() cũng có một vai trò quan trọng khác là định nghĩa các route để xử lý các yêu cầu HTTP GET.*/
/* router */
routerAPI.get('/users', getUserApi);
routerAPI.post('/users', postCreateUserApi);
routerAPI.put('/users', putCreateUserApi);
routerAPI.delete('/users', deleteUserApi);
routerAPI.post('/file', postUploadSingleFileApi);
routerAPI.post('/files', postUploadMultipleFilesApi);
routerAPI.post('/customers', postCreatecustomerApi);
routerAPI.post('/customers-many', postArrayCustomersApi);
routerAPI.get('/customers', getAllCustomersApi);
routerAPI.put('/customers', putUpdateCustomerApi);
module.exports = routerAPI;