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

const getAllProducts = async (req, res) => {
  try {
    const getData = await productService.getProduct(req.query);
    res.status(201).json(getData);
    console.log(req.query)
  } catch (error) {
    res.status(400).send(error.message);
  }
  // res.json(products)
};

const getProductById = async (req, res) => {
  // console.log(req.query);
  console.log(req.params.id);

  const id = req.params.id;
  try {
    const product = await productService.getProductById(id);
    if (!product) res.status(404).send("product not found");

    res.json(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const addProduct = async (req, res) => {
  // console.log(req.body);

  const data = req.body;
  const userId = req.user._id;

  if (!data.name) return res.status(422).send("product name is required ");
  if (!data.price) return res.status(422).send("product price is required ");
  try {
    const createdProduct = await productService.createProduct(data, userId);
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const updateProduct = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const user = req.user;
  try {
    const product = await productService.getProductById(id);
    if (!product) return res.status(404).send("Product not Found");
    if (product.createdBy !=user._id&& !user.roles.includes("ADMIN")) {
      return res.status(404).send("Access Denied");
    }
    const updatedProduct = await productService.updateProductById(id, data);
    res.status(201).json(updatedProduct);
    
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedProduct = await productService.deleteProductById(id);
    res.send(`product deleted with id ${id} successfully`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const getAllCategories = async (req, res) => {
  try {
    const categories= await productService.getCategories();
    res.status(201).json(categories);
  } catch (error) {
    res.status(400).send(error.message);
  }
  
};
const getTotalSumProduct = async (req, res) => {
  try {
    const totalProduct= await productService.getTotalProducts();
    res.status(201).json(totalProduct);
  } catch (error) {
    res.status(500).send(error.message);
  }
  
};
export {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  getAllCategories,
  getTotalSumProduct,
};
