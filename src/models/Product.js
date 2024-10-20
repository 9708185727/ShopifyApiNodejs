import mongoose from "mongoose";
const productSchema =new mongoose.Schema({
  
    name:{
        type:String,
        required:true,
    },
    description:String,
    price:{ type:Number,
        required:true,
        min:0,
    },
    category:String,

    stock:{ type:Number,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
})
export default mongoose.model("Product",productSchema);