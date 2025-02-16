import { userRegister,userLog,logout, getAllUser} from "../controllers/userController.js";
import express from "express";
import auth from "../middlewares/auth.js";
import roleBaseAuth from "../middlewares/roleBasedAuth.js";
const router=express.Router();

router.post("/register",userRegister);
router.post("/login",userLog);
router.post("/logout",logout);
router.get("/users",[auth,roleBaseAuth("ADMIN")],getAllUser)
export default router;
