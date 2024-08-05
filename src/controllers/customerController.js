const { uploadSingleFile } = require("../services/fileService");

const { createCustomerService, createArrayCustomerService,
    getAllCustomersService, updateCustomerService, deleteCustomerService,
    deleteArrayCustomerService
} = require("../services/customerService");

const postCreatecustomerApi = async (req, res) => {
    let { name, address, phone, email, description } = req.body;
    let imageURL = "";

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No file uploaded.");
    } else {
        let results = await uploadSingleFile(req.files.image);
        imageURL = results.path;
    }
    let customerData = {
        name,
        address,
        phone,
        email,
        description,
        image: imageURL
    }
    let user = await createCustomerService(customerData);
    if (user) {
        return res.status(200).json(
            {
                EC: 0,
                data: user
            }
        )
    } else {
        return res.status(200).json(
            {
                EC: -1,
                data: user
            }
        )
    }

}
const postArrayCustomersApi = async (req, res) => {
    let customers = await createArrayCustomerService(req.body.customers);
    if (customers) {
        return res.status(200).json(
            {
                EC: 0,
                data: customers
            }
        );
    } else {
        return res.status(200).json(
            {
                EC: -1,
                data: customers
            }
        );
    }
}
const getAllCustomersApi = async (req, res) => {
    let { limit, page, name } = req.query;
    let customers = null;
    if (limit && page) {
        customers = await getAllCustomersService(limit, page, req.query);
    } else {
        customers = await getAllCustomersService();
    }

    if (customers) {
        return res.status(200).json(
            {
                EC: 0,
                data: customers
            }
        )
    } else {
        return res.status(200).json(
            {
                EC: -1,
                data: customers
            }
        )
    }
}
const putUpdateCustomerApi = async (req, res) => {
    let customerUpdate = req.body;
    let results = await updateCustomerService(customerUpdate);
    return res.status(200).json(
        {
            EC: 0,
            data: results
        }
    )
}
const deleteCustomerApi = async (req, res) => {
    let idCustomer = req.body.id;
    let results = await deleteCustomerService(idCustomer);
    return res.status(200).json(
        {
            EC: 0,
            data: results
        }
    )
}
const deleteArrayCustomersApi = async (req, res) => {
    let customersId = req.body.customersId;
    let results = await deleteArrayCustomerService(customersId);
    return res.status(200).json(
        {
            EC: 0,
            data: results
        }
    )
}

module.exports = {
    postCreatecustomerApi, postArrayCustomersApi, getAllCustomersApi,
    putUpdateCustomerApi, deleteCustomerApi, deleteArrayCustomersApi
}