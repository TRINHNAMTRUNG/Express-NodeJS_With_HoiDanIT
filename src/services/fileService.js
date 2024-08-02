const path = require("path");

const uploadSingleFile = async (fileObject) => {
    let uploadPath = path.resolve(__dirname, "../public/images/upload");
    let extName = path.extname(fileObject.name);
    let baseName = path.basename(fileObject.name, extName);
    let finalName = `${baseName}-${Date.now()}${extName}`;
    let finalPath = `${uploadPath}/${finalName}`;
    // Use the mv() method to place the file somewhere on your server
    try {
        await fileObject.mv(finalPath);
        return {
            status: "Success",
            path: finalName,
            error: null
        }
    } catch (error) {
        return {
            status: "Failed",
            path: null,
            error: JSON.stringify(error)
        }
    }
}
const uploadMultipleFiles = async (filesArray) => {
    let uploadPath = path.resolve(__dirname, "../public/images/upload");
    let resultsArray = [];
    let countSuccess = 0;
    try {
        for (const fileObject of filesArray) {
            let extName = path.extname(fileObject.name);
            let baseName = path.basename(fileObject.name, extName);
            let finalName = `${baseName}-${Date.now()}${extName}`;
            let finalPath = `${uploadPath}/${finalName}`;

            try {
                await fileObject.mv(finalPath);
                resultsArray.push({
                    status: "Success",
                    path: finalName,
                    fileName: fileObject.name,
                    error: null
                });
                countSuccess++;
            } catch (error) {
                resultsArray.push({
                    status: "Failed",
                    path: null,
                    fileName: fileObject.name,
                    error: JSON.stringify(error)
                });
            }
        }
        return {
            countSuccess: countSuccess,
            detail: resultsArray
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    uploadSingleFile,
    uploadMultipleFiles
}