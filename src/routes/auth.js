import { userRegister,userLog,logout} from "../controllers/userController.js";
import express from "express";
const router=express.Router();

router.post("/register",userRegister);
router.post("/login",userLog);
router.post("/logout",logout);
export default router;
