import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: String,
  category: String,
  price: { type: Number, required: true, min: 0 },
  description: String,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  createdBy: {
    type:mongoose.Schema.Types.ObjectId ,
    ref:"User",
    required:true,
  },
});
export default mongoose.model("Product", productSchema);
