import mongoose from 'mongoose'
const postModel= new mongoose.Schema({
    food:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    type:{
        type:String,
        required:true,
        default:'veg'
    },
    location:{
        type:String,
        required:true,
    },
    status:{
        type:String,
    },
    userId:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'User'
    },
    expireIn:{
        type:Number,
        required:true,
    },
    image:{
        url:String,
    }
})

const Post=mongoose.model('Post',postModel)
export default Post