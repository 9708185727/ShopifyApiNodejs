import { userRegister,userLog} from "../controllers/userController.js";
import express from "express";
const router=express.Router();

router.post("/register", userRegister);
router.post("/login",userLog);
export default router;
