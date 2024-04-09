const mongoose = require("mongoose"); 
const{validationDNI}=require("../../util/validate");
const Contract = require("../contracts/contracts.model");
const clientSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true },
    surname: { type: String, trim: true, required: true },
    id_client: {type:String, trim:true, required:true},
    dni_client: {type:String, trim:true, required:true},
    contracts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Contract"}]
});
clientSchema.pre("save", function(next){
    if(!validationDNI(this.dni_client)){
        return new Error("Numero de DNI no valido");
    }
})

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;