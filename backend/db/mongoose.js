import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();


const MONGODB_URL = process.env.MONGODB_URL
mongoose.connect(MONGODB_URL, {
    useNewUrlParser:true, 
    useCreateIndex:true,
    useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})