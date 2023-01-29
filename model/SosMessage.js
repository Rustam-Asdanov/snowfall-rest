const mongoose = require("mongoose");

const SosMessageSchema = new mongoose.Schema({
    message: String,
    locationData: String
});

const SosMessageModel = mongoose.model("SosMessage", SosMessageSchema);

module.exports = SosMessageModel;