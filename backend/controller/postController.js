
import postModel from '../schema/postSchema.js'
import fs from 'fs'
import { v2 as cloudinary } from "cloudinary";
import userModel from '../schema/userSchema.js';
export const uploadPost=async (req,res)=>{
    try {
        const userId=req.user.id;
        console.log('file',req.file)
        console.log('field',req.body)
        const cloud= await cloudinary.uploader.upload(req.file.path,{resource_type:'image'})
        const {food,foodType,quantity,expireIn,location,}=req.body
        const newPost= await postModel.create({
            food,
            type:foodType,
            quantity,
            expireIn,
            location,
            userId:req.user._id,
            image:{
                url:cloud.secure_url,
            }
        })
        console.log('uploaded succesfully ')
        const user= await userModel.findById(userId);
        user.post.push(newPost._id);
        await user.save();
        res.json('uploaded succesfully',newPost)


    } catch (error) {
        console.log('error in uploading post ',error)
    }
}

// get data

export const getPost=async(req,res)=>{
    try {
        const data= await postModel.find();
        console.log(data)
        res.send(data)
    } catch (error) {
        
    }
}
