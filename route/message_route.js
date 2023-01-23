const express = require("express");
const router = express.Router();

const {
    getAllMessages,
    addMessage
} = require("../rest_controller/")

router.route("/").get(getAllMessages).post(addMessage);

module.exprots = router;