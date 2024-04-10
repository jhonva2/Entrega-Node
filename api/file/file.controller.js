const file = require("./file.model");
const createFile = async (req, res, next) => {
    try {
        const path = req.file ? req.file.path : "";

        const file = await File.create({path});
        res.json({
            status: 201,
            data: file, 
        });
    } catch (error){
        next(error);
    }
};
module.exports = {createFile};