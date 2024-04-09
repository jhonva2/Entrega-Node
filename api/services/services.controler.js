const Service = require("./services.model");
const createService =  async (req, res, next) => {
    try{
        const service = new Service(req.body);
        const serviceExist = await Service.findOne({producto:serviceSchema.producto});
        if (serviceExist){
            return new Error("Este contrato ya existe en la base");
        }
        const serviceDB = await service.save();
        return res.json({
            status: 201,
            message: "create",
            data: serviceDB
            
        })
    } catch(error) {
        return next(error)
    }
};

module.exports = {createService};