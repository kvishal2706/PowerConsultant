import express from "express";
import {createAdmin,loginAdmin} from "../controllers/adminController.js";
import {getAllUsers} from "../controllers/userController.js";
const router=express.Router();

router.post("/create", createAdmin);
router.post("/login", loginAdmin);
router.get('/getAllUsers',getAllUsers);
export default router;