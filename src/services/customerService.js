const Customer = require("../models/customer");
const Project = require("../models/project");
const aqp = require('api-query-params');
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

const getAllCustomersService = async (limit, page, queryString) => {
    let results = null;
    let totalRow = 0;
    let totalPage = 0;
    try {
        const { filter } = aqp(queryString);
        delete filter.page;
        console.log("check FILTER: ", filter);
        let skip = (page - 1) * limit;
        totalRow = await Customer.countDocuments({});
        if (limit && page) {
            totalPage = Math.ceil(totalRow / limit);
            results = await Customer.find(filter).skip(skip).limit(limit).exec();
        } else {
            results = await Customer.find({});
        }
        return { totalPage, totalRow, customers: results };
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
const deleteArrayCustomerService = async (customersId) => {
    try {
        let results = await Customer.delete({ _id: { $in: customersId } });
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = {
    createCustomerService, createArrayCustomerService, getAllCustomersService,
    updateCustomerService, deleteCustomerService, deleteArrayCustomerService,
}