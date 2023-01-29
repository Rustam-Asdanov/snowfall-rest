const SosMessage = require("../model/SosMessage");

const getMessageList = async () => {
    return await SosMessage.find({});
}

const newMessage = async (body) => {
    console.log(body);

    const myMessage = new SosMessage({
        message: body["message"],
        latitude: body["latitude"],
        longitude: body["longitude"]
    });

    const result = await myMessage.save();
    return result;
}

module.exports = {
    getMessageList,
    newMessage
}