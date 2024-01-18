const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const productSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:[true, "Price must be provided"],
    },
    featured:{
        type: Boolean,
        default: false,
    },
    rating:{
        type:Number,
        default: 4.0,
    },
    createdAt:{
        type:Date,
        default: Date.now(),
    },
    company:{
        type:String,
        enum:{
            values: ["apple","samsung","dell","acer","realme","sonata"],
            message:`{VALUE} is not supported`,
        },
    },
    
});
module.exports=mongoose.model("Product",productSchema);