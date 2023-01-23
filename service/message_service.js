const SosMessage = require("../model/SosMessage");

const getMessageList = async ()=>{
    let message = new Array();

    await SosMessage.find({}).then((result)=>{
        return result;
    });
}

const newMessage = async () => {
    const msg = await SosMessage.updateOne(
        
    )
}

module.exprots = {
    getMessageList,
    newMessage
}