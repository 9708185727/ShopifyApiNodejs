import express from "express";
import dotenv from 'dotenv';
import bodyParser from 'body-parser'
import products from './routes/products.js';
import contacts from './routes/contacts.js';
import auth from "./routes/auth.js"
import connectDB from "./routes/database.js";
import logger from "./middlewares/logger.js";
import cookieParser from "cookie-parser";
import cors from "cors"

import User from "./models/User.js";
const app = express();
app.use(logger);
//parser application
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
dotenv.config();
connectDB();
app.use(cookieParser());
app.use(cors({
  origin: process.env.APP_URL, // Allow frontend
  // methods: "GET, POST, PUT, DELETE, OPTIONS",
  // allowedHeaders: "Content-Type,multipart/form-data",
  // credentials: true,
}));



app.use("/uploads", express.static("./uploads"));
const PORT=process.env.PORT;

app.get("/", (req, res) => {
  // res.send('homepage');
  //JSON =>JavaScript Object Notation
  res.status(500).json({
    appName: "shopfiyGhar",
    version:"2.0.0",
    port:PORT,
  });
});
app.use("/api/products",products);
app.use("/api/auth",auth)
app.use("/api/contact",contacts)


app.get("/image",async (req, res) => {

  const user = await User.find();
  res.status(200).json(user);
});
// app.get("/about",(req,res)=>{
//     res.send('about page');

// })
// app.get("/contact",(req,res)=>{
//     res.send('contact page');

// })\
// app.post('/products',(req,res)=>{
//   res.send("hello products")
// })
// app.post('/products/:id',(req,res)=>{
//   res.send("hello id")
// })
app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
// http methods
// crud
// Read =get /products
// create/write =post /products/:id
// update=put /products/:id
// delete=delete /products/:id
