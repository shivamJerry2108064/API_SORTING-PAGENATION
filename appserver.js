require("dotenv").config();

const express=require("express");
const app=express();
const connectDb=require("./db/connectTodb");

const productRouter=require("./Routes/product");

app.get("/",(req,res)=>{
    res.send("hi, i am live!");
});

//set router
app.use("/products", productRouter);

//connecting to server...

// let port=8000;
// app.listen(port,(req,res)=>{
//     console.log(`listening on port ${port}`);
// });

// connectionToServer().then((res)=>{
//     console.log("connection with database is successful");
// }).catch((err)=>{
//     console.log(err);
// });

// async function connectionToServer(){
//         await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
// }

const PORT= 5000;
MONGODB_URL="mongodb://127.0.0.1:27017/krishnaMart";

const start= async()=>{
    try{
        await connectDb(MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`Listening to ${PORT}`);
        });
    }catch(e){
        console.log(e);
    }
};
start();

