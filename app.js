const express = require("express");
const app = express();
const connectDB = require("./database/connection");
const message_router = require("./router/message_route");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const port = 3000;

require("dotenv").config();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
mongoose.set("strictQuery", true);

app.use("/api/v1", message_router);

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(port, ()=>{
            console.log(`Server listen on port ${port}`);
        });
    } catch(err) {
        console.log(err);
    }
}

start();
