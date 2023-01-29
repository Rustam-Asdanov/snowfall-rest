const SosMessage = require("../model/SosMessage");

const getMessageList = async () => {
    return await SosMessage.find({});
}

const newMessage = async (body) => {

    const myMessage = new SosMessage({
        message: body["message"],
        locationData: body["location"]
    });

    const result = await myMessage.save();
    return result;
}

module.exports = {
    getMessageList,
    newMessage
}