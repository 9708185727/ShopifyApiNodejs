import { userRegister,userLog,logout, getAllUser, ForgotPassword, ResetPassword} from "../controllers/userController.js";
import express from "express";
import auth from "../middlewares/auth.js";
import roleBaseAuth from "../middlewares/roleBasedAuth.js";
import multer from "multer";
// import { upload } from "../middlewares/upload.js";

const storage = multer.memoryStorage(); // Store file in memory
const upload = multer({ storage });
const router=express.Router();


router.post("/register",upload.single("image"),userRegister);
router.post("/login",userLog);
router.post("/logout",logout);
router.post("/forgot-password",ForgotPassword);
router.post("/reset-password",ResetPassword);
router.get("/users",[auth,roleBaseAuth("ADMIN")],getAllUser)


export default router;
