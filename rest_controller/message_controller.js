const { getMessageList, newMessage } = require("../service/");

const getAllMessages = async (req, res) => {
    await getMessageList().then((result) => {
        res.status(200).json(result);
    })
        .catch((err) => {
            res.status(500).json(err);
        })
}

const newMessage = async (req, res) => {
    const request_body = req.body;
    const my_message = request_body["message"];

    await newMessage(my_message)
        .then((result) => {
            res.status(201).json(result);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
}