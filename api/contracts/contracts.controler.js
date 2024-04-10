const Contract = require("./contracts.model");
const createContract = async (req, res, next) => {
  try {
    const contract = new Contract(req.body);
    const contractExist = await Contract.findOne({
      numContract: contract.numContract,
    });
    if (contractExist) {
      return new Error("Este contrato ya existe en la base");
    }
    const contractDB = await contract.save();
    return res.json({
      status: 201,
      message: "create",
      data: contractDB,
    });
  } catch (error) {
    return next(error);
  }
};

const getAllContracts = async (request, response) => {
  try {
    const contract = await contract.find();
    response.json({
      status: 200,
      message: "found",
      data: contract,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateContracts = async (request, response) => {
  try {
    const contract = await Contract.findById(numContract); // delete
    // busco por id el animal a editar

    const numContract = request.params.numContract;
    // obtengo los datos que hay que editar del body / payload

    const body = request.body;
    // uso la funcion mongo que sirve para editar cosas

    const updatedContract = await Client.findByIdAndUpdate(numContract, body, {
      new: true,
    });
    // respondo al cliente

    response.json({
      status: 200,
      message: "updated",
      data: updatedContract,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteContract = async (request, response) => {
  try {
    const numContract = request.params.numContract;
    const contract = await Client.findByIdAndDelete(numContract);
    response.json({
      status: 200,
      message: "deleted",
      data: contract,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createContract,
  getAllContracts,
  updateContracts,
  deleteContract,
};
