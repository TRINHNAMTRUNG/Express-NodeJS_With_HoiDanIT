const Customer = require("../models/customer");

const createCustomerService = async (customerData) => {
    try {
        let results = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image
        })
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const createArrayCustomerService = async (arr) => {
    try {
        let results = await Customer.insertMany(arr);
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const getAllCustomersService = async () => {
    try {
        let results = await Customer.find({});
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const updateCustomerService = async (customerUpdate) => {
    let { id, name, address, phone, email, description } = customerUpdate;

    try {
        let results = await Customer.updateOne(
            { _id: id },
            {
                name: name,
                address: address,
                phone: phone,
                email: email,
                description: description,
            }
        );
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}
const deleteCustomerService = async (id) => {
    try {
        //deleteById is static method in mongoose-delete. What is static method. 
        // with static method: model.staticMethod()
        // with non-static method: instance.method()
        let results = await Customer.deleteById({ _id: id });
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}
module.exports = {
    createCustomerService, createArrayCustomerService, getAllCustomersService,
    updateCustomerService, deleteCustomerService
}