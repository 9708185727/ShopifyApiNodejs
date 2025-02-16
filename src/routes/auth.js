import { userRegister,userLog,logout, getAllUser} from "../controllers/userController.js";
import express from "express";
const router=express.Router();

router.post("/register",userRegister);
router.post("/login",userLog);
router.post("/logout",logout);
router.get("/users",getAllUser)
export default router;
