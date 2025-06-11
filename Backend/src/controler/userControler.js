import asyncHandler from "../middleWare/asyncHandler.js";
import User from "../model/authModel.js";

export const getUser=asyncHandler(async(req,res)=>{
    const user=await User.find()
    return res.status(200).json({
        message:"get all users successfully",
        user
    })
})