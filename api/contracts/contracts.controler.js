const Contract = require("./contracts.model");
const createContract =  async (req, res, next) => {
    try{
        const contract = new Contract(req.body);
        const contractExist = await Contract.findOne({numContract:contract.numContract});
        if (contractExist){
            return new Error("Este contrato ya existe en la base");
        }
        const contractDB = await contract.save();
        return res.json({
            status: 201,
            message: "create",
            data: contractDB
            
        })
    } catch(error) {
        return next(error)
    }
};

module.exports = {createContract};