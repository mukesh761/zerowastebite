import express from "express";
const router=express.Router();
import { islogin } from "../middleware/islogin.js";
import { uploadPost ,getPost} from "../controller/postController.js";
import upload from '../middleware/multer.js'

router.get("/",(req,res)=>{
    return res.send("this is post router")
})

router.post("/upload",islogin,upload.single("image"),uploadPost)
router.get('/getfood',islogin,getPost)
export default router;