import mongoose from "mongoose"


const contactSchema=new mongoose.Schema({
    name:{
      type:String,
      required:true,

    },
    phone:{
        type:String,
        required:true,
    },
    address:{
       type:String,
       required:true,
        
    },

    message:{
        type:String,
     
       
        required:[true, 'message is required'],
    },
    



})
export default mongoose.model("contact",contactSchema)