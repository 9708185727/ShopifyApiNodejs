import express from "express";
import auth from "../middlewares/auth.js";
import {addProduct, getAllProducts, getProductById, updateProduct,deleteProduct} from "../controllers/productController.js";
const router = express.Router();


router.get("/",getAllProducts );

router.get("/:id",auth,getProductById);

router.post("/",auth,addProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);
export default router;
