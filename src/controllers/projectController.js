
const { createProjectService, getAProjectService } = require("../services/projectService");
const postCreateProjectApi = async (req, res) => {
    let project = await createProjectService(req.body);
    if (project) {
        return res.status(200).json(
            {
                EC: 0,
                data: project
            }
        )
    } else {
        return res.status(200).json(
            {
                EC: -1,
                data: project
            }
        )
    }
}

const getAProjectApi = async (req, res) => {
    let { page } = req.query;
    let project = await getAProjectService(page, req.query);
    if (project) {
        return res.status(200).json(
            {
                EC: 0,
                data: project
            }
        )
    } else {
        return res.status(200).json(
            {
                EC: -1,
                data: project
            }
        )
    }

}
module.exports = {
    postCreateProjectApi, getAProjectApi
}