const express = require("express");
const my_router = express.Router();

const {
    getAllMessages,
    createMessage
} = require("../controller/message_controller");

my_router.route("/").get(getAllMessages).post(createMessage);

module.exports = my_router;