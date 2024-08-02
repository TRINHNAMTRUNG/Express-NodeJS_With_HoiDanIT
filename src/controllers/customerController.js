const { uploadSingleFile } = require("../services/fileService");
const { createCustomerService, createArrayCustomerService } = require("../services/customerService");

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
const postArraycustomersApi = async (req, res) => {
    console.log(">>> check data ar: ", req.body)
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

module.exports = {
    postCreatecustomerApi, postArraycustomersApi
}