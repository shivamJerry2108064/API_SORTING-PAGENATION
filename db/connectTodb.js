const mongoose=require("mongoose");


connectionToServer().then((res)=>{
    console.log("connection with database is successful");
}).catch((err)=>{
    console.log(err);
});

async function connectionToServer(url){
        await mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});
}


module.exports = connectionToServer;