import express from "express"
import {addContact} from "../controllers/contactController.js"
import auth from "../middlewares/auth.js"
const router=express.Router()
router.post("/",auth,addContact)
export default router