require("dotenv").config();

const connectDb = require("./db/connectTodb");  // require access to database...
const Product = require("./models/product");   //require our product model.....
const data = require("./products.json");

const start = async()=>{
    try{
        await connectDb(process.env.MONGODB_URL);
        await Product.deleteMany();
        await Product.create(data);
        console.log("data inserted successfully");
    }catch(e){
        console.log(e);
    }
};

start();