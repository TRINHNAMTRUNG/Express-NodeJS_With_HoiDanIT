const { Aggregate } = require("mongoose");
const Project = require("../models/project");
const aqp = require('api-query-params');
const createProjectService = async (data) => {
    try {
        if (data.type === "EMPTY-PROJECT") {
            let results = await Project.create(data);
            return results;
        }
        if (data.type === "ADD-USERS") {
            // find project 
            let myProject = await Project.findById(data.projectId).exec();
            if (myProject) {
                let check = data.userArr.forEach(id => {
                    if (!myProject.usersInfor.includes(id)) {
                        myProject.usersInfor.push(id);
                    }
                });
                let newResults = await myProject.save();
                return newResults;
            }
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}
const getAProjectService = async (page, queryString) => {
    const { filter, limit, population } = aqp(queryString);
    delete filter.page;
    let skip = (page - 1) * limit;
    let arrProject = await Project
        .find(filter)
        .populate(population)
        .skip(skip)
        .limit(limit)
        .exec();

    return arrProject
}

module.exports = {
    createProjectService, getAProjectService
}