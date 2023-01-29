const { getMessageList, newMessage } = require("../service/message_service");

const getAllMessages = async (req, res) => {
    await getMessageList()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
};

const createMessage = async (req, res) => {
    const request_body = req.body;
   
    console.log(request_body)

    await newMessage(request_body)
        .then((result) => {
            res.status(201).json(result);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

module.exports = {
    getAllMessages,
    createMessage
}