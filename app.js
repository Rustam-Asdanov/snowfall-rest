const express = require("express");
const app = express();
const connectDB = require("./database/connection");
const port = 3000;

require("dotenv").config();
app.use(express.json());

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