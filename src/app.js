import express from "express";
import dotenv from 'dotenv';
import bodyParser from 'body-parser'
import products from './routes/products.js';
import auth from "./routes/auth.js"
import connectDB from "./routes/database.js";
import logger from "./middlewares/logger.js";
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express();
app.use(logger);
//parser application
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

dotenv.config();
connectDB();
app.use(cookieParser());
app.use(cors({
   origin:"https://shopfiyghar.vercel.app"
  // origin:process.env.APP_URL,
}))
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
  console.log("server running at port 5000");
});
// http methods
// crud
// Read =get /products
// create/write =post /products/:id
// update=put /products/:id
// delete=delete /products/:id
