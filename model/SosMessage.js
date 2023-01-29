const mongoose = require("mongoose");

const SosMessageSchema = new mongoose.Schema({
    message: String,
    latitude: Number,
    longitude: Number
});

const SosMessageModel = mongoose.model("SosMessage", SosMessageSchema);

module.exports = SosMessageModel;