
const uploadSingleFile = async (fileObject) => {
    let uploadPath = __dirname + fileObject.name;

    // Use the mv() method to place the file somewhere on your server
    try {
        await fileObject.mv(uploadPath);
        return {
            status: "Success",
            path: "Link-image",
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
const uploadMultipleFile = () => {

}

module.exports = {
    uploadSingleFile,
    uploadMultipleFile
}