const { uploadSingleFile } = require("../services/fileService");
const { createCustomerService } = require("../services/customerService");

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
    return res.status(200).json(
        {
            EC: 0,
            data: user
        }
    )
}

module.exports = {
    postCreatecustomerApi
}