import express from "express";
import auth from "../middlewares/auth.js";
import {addProduct, getAllProducts, getProductById, updateProduct,deleteProduct} from "../controllers/productController.js";
import roleBaseAuth from "../middlewares/roleBasedAuth.js";
const router = express.Router();


router.get("/",getAllProducts );

router.get("/:id",getProductById);

router.post("/",auth,addProduct);
router.put("/:id",auth,updateProduct);
router.delete("/:id",[auth,roleBaseAuth("ADMIN")],deleteProduct);
export default router;
