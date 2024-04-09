const mongoose = require("mongoose"); 
const serviceSchema = new mongoose.Schema({
producto:{ type:String, required: true, enum:["MOVIL", "FIBRA","TV"]}  
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
  






  