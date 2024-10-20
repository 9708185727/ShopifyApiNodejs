// import url from "url";
// import path from "path";
// import fs from "fs";
import productService from "../services/productService.js";
// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const rawData = fs.readFileSync(
//   `${__dirname}/../../data/products.json`,
//   "utf-8"
// );

// const products = JSON.parse(rawData);

const getAllProducts= async (req, res) => {

try {
  const getData=await productService.getProduct(req.query);
  res.status(201).json(getData);
} catch (error) {
  res.status(400).send(error.message)
}
    // res.json(products)
  }

const getProductById= async (req, res) => {
    // console.log(req.query);
    console.log(req.params.id);
  
    const id = req.params.id;
  try {
    
    const product = await productService.getProductById(id)  
    if (!product) res.status(404).send("product not found");
  
    res.json(product);
  } catch (error) {
    res.status(400).send(error.message)
  }
  }
  const addProduct= async (req, res) => {
    // console.log(req.body);
    const newProduct = req.body;
try {
  const createdData=await productService.createProduct(newProduct);
    // products.push(newProduct);
    // fs.writeFileSync(
    //   `${__dirname}/../../data/products.json`,
    //   JSON.stringify(products)
    // );
    res.status(201).json(createdData);
  
} catch (error) {
  res.status(400).send(error.message)
  
}
  }
const updateProduct= async (req,res)=>{
  const id=req.params.id;
  const data=req.body;
  const updatedProduct= await productService.updateProductById(id,data);
  res.status(201).json(updatedProduct);

}
const deleteProduct= async (req,res)=>{
  const id=req.params.id;
  try {
    const deletedProduct= await productService.deleteProductById(id);
    res.send(`product deleted with id ${id} successfully`);
  } catch (error) {
    res.status(500).send(error.message);
  }
  


}
  
  export {getAllProducts, getProductById , addProduct, updateProduct,deleteProduct,};