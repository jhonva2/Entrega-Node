const mongoose = require("mongoose"); 
const bcrypt = require("bcrypt");
const contractSchema = new mongoose.Schema({
    numContract: { type: Number, trim: true, required: true },
    fecha_Alta: { type: Date, required: true },
    fecha_Baja: { type: Date},
    coste: {type:Number, trim:true, required:true},
    formaPago: {type:String, trim:true, required:true},
    dirPago: {type:String, trim:true, required:true},
    services:[{ type: mongoose.Schema.Types.ObjectId, ref: "Service"}]
});

const Contract = mongoose.model("Contract", contractSchema);

module.exports = {Contract}