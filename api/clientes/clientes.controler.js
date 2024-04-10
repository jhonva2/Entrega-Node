const Client = require("./clientes.model");
const createClient = async (req, res, next) => {
  try {
    const client = new Client(req.body);
    const clientExist = await Client.findOne({ id_client: client.id_client });
    if (clientExist) {
      return new Error("Este Cliente ya existe en la base");
    }
    const clientDB = await client.save();
    return res.json({
      status: 201,
      message: "create",
      data: clientDB,
    });
  } catch (error) {
    return next(error);
  }
};

const updateClients = async (request, response) => {
  try {
    const client = await Client.findById(id); // delete
    // busco por id el animal a editar

    const id = request.params.id;
    // obtengo los datos que hay que editar del body / payload

    const body = request.body;
    // uso la funcion mongo que sirve para editar cosas

    const updatedClient = await Client.findByIdAndUpdate(id, body, {
      new: true,
    });
    // respondo al cliente

    response.json({
      status: 200,
      message: "updated",
      data: updatedClient,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllClients = async (request, response) => {
  try {
    const clients = await Client.find();
    response.json({
      status: 200,
      message: "found",
      data: clients,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteClient = async (request, response) => {
  try {
    const id_client = request.params.id_client;
    const client = await Client.findByIdAndDelete(id_client);
    response.json({
      status: 200,
      message: "deleted",
      data: client,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createClient, getAllClients, updateClients, deleteClient };
